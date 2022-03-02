import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    const tableName = 'tags';
    const imagesExists = await knex.schema.hasTable(tableName);

    if (!imagesExists) {
        return knex.schema.createTable(tableName, function (table) {
            table.increments();
            table.string('tag_name');
        });
    }
}

export async function down(knex: Knex): Promise<void> {
    console.log(knex);
}
