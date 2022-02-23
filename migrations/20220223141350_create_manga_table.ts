import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    const mangaExists = await knex.schema.hasTable('manga');

    if (!mangaExists) {
        return knex.schema.createTable('manga', function (table) {
            table.increments();
            table.string('directory').notNullable();
            table.string('title').notNullable();
            table.boolean('active').notNullable();
            table.string('author').notNullable();
            table.string('bucket').notNullable();
            table.string('thumbnail').notNullable();
            table.string('series').notNullable();
            table.string('universe').notNullable();
            table.integer('chapter').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
        });
    }
}

export async function down(knex: Knex): Promise<void> {
    console.log(knex);
}
