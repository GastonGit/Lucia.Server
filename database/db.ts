import { knex } from 'knex';
import knexFile from '../knexfile';

const db = knex(knexFile);

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
        return db('manga')
            .select()
            .offset((page - 1) * 21)
            .limit(21);
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

    async findMangaByTitle(title: string) {
        const trimmedTitle = title.replace(/[^A-Za-z0-9\s!?]/g, '');
        return db('manga').whereLike('title', '%' + trimmedTitle + '%');
    }
}

export default new Database();
