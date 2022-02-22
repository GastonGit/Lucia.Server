import { knex } from 'knex';
import knexFile from '../knexfile';

const db = knex(knexFile);

class Database {
    async getManga() {
        return await this.selectData('manga');
    }

    selectData(tableName: any) {
        return db(tableName)
            .select()
            .then((resp) => resp);
    }
}

export default new Database();
