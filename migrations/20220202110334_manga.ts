import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    const tableExists = await knex.schema.hasTable('manga');

    if (!tableExists) {
        return knex.schema.createTable('manga', function (table) {
            table.increments();
            table.string('title');
            table.string('author');
            table.string('bucket');
            table.string('thumbnail');
            table.string('series');
            table.string('universe');
            table.integer('chapter');
            table.timestamp('created_at').defaultTo(knex.fn.now());
        });
    }
}

export async function down(knex: Knex): Promise<void> {
    console.log(knex);
}
