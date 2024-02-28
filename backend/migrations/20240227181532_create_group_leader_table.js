/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('group_leaders', function (table) {
        table.increments('id').primary();
        table.integer('organization_id').unsigned();
        table.foreign('organization_id').references('organizations.id');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.integer('group_id').unsigned();
        table.foreign('group_id').references('groups.id');
        table.timestamps(true, true);
        table.unique('group_id');

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("group_leaders");
};
