/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('addresses', function (table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().unique();
        table.foreign('user_id').references('users.id');
        table.string('zipcode', 255).nullable();
        table.string('city', 255).nullable();
        table.string('state', 255).nullable();
        table.string('country', 255).nullable();
        table.timestamps(true, true);
        
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("addresses");
};
