import { knex } from 'knex';
import knexFile from '../knexfile';

const db = knex(knexFile);

class Database {
    async getGallery() {
        return db('manga').select().limit(21);
    }
}

export default new Database();
