import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    const tableName = 'MangaTags';
    const imagesExists = await knex.schema.hasTable(tableName);

    if (!imagesExists) {
        return knex.schema.createTable(tableName, function (table) {
            table.increments();
            table.integer('manga_id');
            table.foreign('manga_id').references('id').inTable('manga');
            table.integer('tag_id');
            table.foreign('tag_id').references('id').inTable('tags');
        });
    }
}

export async function down(knex: Knex): Promise<void> {
    console.log(knex);
}
