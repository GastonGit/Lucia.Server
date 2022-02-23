import { knex } from 'knex';
import knexFile from '../knexfile';

const db = knex(knexFile);

class Database {
    async getGallery() {
        return db('manga').select().limit(21);
    }

    async getPage(page: number) {
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
