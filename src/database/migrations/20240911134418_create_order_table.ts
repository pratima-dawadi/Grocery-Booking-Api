import { Knex } from "knex";

const TABLE_NAME = "order";

/**
 * Create table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements();
    table
      .bigInteger("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table
      .bigInteger("grocery_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("grocery")
      .onDelete("CASCADE");

    table.integer("order_quantity").unsigned().notNullable();
    table.decimal("total_price", 10, 2).notNullable();

    table.timestamp("created_at").notNullable().defaultTo(knex.raw("now()"));
  });
}

/**
 * Drop table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
