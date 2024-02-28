/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('organizations', function (table) {
        table.increments('id').primary();
        table.string('name', 255).notNullable();
        table.string('created_by', 255).nullable();
        table.enu('status', ['ACTIVE', 'DELETED']).notNullable().defaultTo('ACTIVE');
        table.timestamps(true, true);
        
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("organizations");
};
