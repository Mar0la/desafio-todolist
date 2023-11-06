import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tasks', function (table) {
    table.increments('id').primary();
    table.string('description').notNullable();
    table.boolean('completed').notNullable().defaultTo(false)
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tasks');
}

