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
        const images = await db('images').select().where({ manga_id: id });

        return {
            information: information,
            images: images,
        };
    }
}

export default new Database();
