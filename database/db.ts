import { knex } from 'knex';
import knexFile from '../knexfile';

const db = knex(knexFile);

interface PureManga {
    id: string;
    directory: string;
    title: string;
    author: boolean;
    bucket: string;
    thumbnail: string;
    series: string;
    universe: string;
    chapter: number;
    created_at: string;
}

class Database {
    async getMaxPageCount() {
        const query = await db('manga').count().first();
        if (typeof query !== 'undefined') {
            const count = query['count(*)'];

            if (typeof count == 'number') {
                return Math.ceil(count / 21);
            }
        }
        return 0;
    }

    async getGallery(page = 1) {
        const mangas = await db('manga')
            .select()
            .offset((page - 1) * 21)
            .limit(21);
        return this.trimMangaResponse(mangas as PureManga[]);
    }

    async getManga(id: number) {
        const information = await db('manga')
            .select()
            .where({ id: id })
            .first();

        if (typeof information !== 'undefined') {
            const images = await db('images')
                .select('name', 'thumbnail')
                .where({ manga_id: id });

            return {
                information: information,
                images: images.map((image) => image.name),
                thumbnails: images.map((image) => image.thumbnail),
            };
        } else {
            return null;
        }
    }

    trimMangaResponse(pureGallery: PureManga[]) {
        const gallery = [];
        for (let i = 0; i < pureGallery.length; i++) {
            gallery.push({
                id: pureGallery[i].id,
                title: pureGallery[i].title,
                author: pureGallery[i].author,
                thumbnail:
                    process.env.SERVER_URL +
                    '/media/' +
                    pureGallery[i].directory +
                    '/' +
                    pureGallery[i].thumbnail,
            });
        }
        return gallery;
    }

    async findMangaByTitle(title: string, page: number) {
        const trimmedTitle = title.replace(/[^A-Za-z0-9\s!?]/g, '');
        const mangas = await db('manga')
            .where('active', 1)
            .whereLike('title', '%' + trimmedTitle + '%')
            .offset((page - 1) * 21)
            .limit(21)
            .orderBy('title');

        const maxCount = await db('manga')
            .whereLike('title', '%' + trimmedTitle + '%')
            .count()
            .first();

        const maxPageCount = Math.ceil(
            (typeof maxCount?.['count(*)'] === 'number'
                ? maxCount['count(*)']
                : 1) / 21,
        );

        return {
            gallery: this.trimMangaResponse(mangas as PureManga[]),
            maxPageCount: maxPageCount,
        };
    }
}

export default new Database();
