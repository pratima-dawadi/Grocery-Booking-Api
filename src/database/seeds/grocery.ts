import { Knex } from "knex";

const TABLE_NAME = "grocery";

/**
 * Delete existing entries and seed values for table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export function seed(knex: Knex): Promise<void> {
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          name: "milk",
          price: 50,
          quantity: 10,
        },
        {
          name: "bread",
          price: 70,
          quantity: 5,
        },
        {
          name: "cheese",
          price: 80,
          quantity: 10,
        },
        {
          name: "eggs",
          price: 15,
          quantity: 30,
        },
        {
          name: "salt",
          price: 30,
          quantity: 20,
        },
      ]);
    });
}
