/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('users_organization', function (table) {
        table.increments('id').primary();
        table.integer('organization_id').unsigned();
        table.foreign('organization_id').references('organizations.id');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.enu('status', ['ACTIVE', 'INVITED', 'DELETED']).notNullable().defaultTo('INVITED'); 
        table.timestamps(true, true);
        table.unique(['user_id', 'organization_id']);

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("users_organization");
};
