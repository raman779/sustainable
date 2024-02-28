/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('disciples_assesment', function (table) {
        table.increments('id').primary();
        table.integer('group_id').unsigned();
        table.foreign('group_id').references('groups.id');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.timestamps(true, true);
        
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("disciples_assesment");
};
