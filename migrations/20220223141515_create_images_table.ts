import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    const imagesExists = await knex.schema.hasTable('images');

    if (!imagesExists) {
        return knex.schema.createTable('images', function (table) {
            table.increments();
            table.string('name');
            table.string('thumbnail');
            table.integer('manga_id');
            table.foreign('manga_id').references('id').inTable('manga');
        });
    }
}

export async function down(knex: Knex): Promise<void> {
    console.log(knex);
}
