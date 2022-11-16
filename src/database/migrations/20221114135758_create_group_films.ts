import { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  return await knex.schema.createTable('movies', (table) => {
    table.uuid('id').unique().primary().notNullable()
    table.string('title')
    table.string('original_title')
    table.text('description')
    table.string('release_date')
    table.string('score')
    table.datetime('created_at').defaultTo(knex.fn.now())
    table.datetime('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down (knex: Knex): Promise<void> {
  return await knex.schema.dropTable('movies')
}
