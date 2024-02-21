/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id').primary();
            table.string('first_name', 255).notNullable();
            table.string('last_name', 255).nullable();
            table.integer('mobile_number', 20).nullable();
            table.enu('status', ['ACTIVE', 'INVITED', 'DELETED']).notNullable(); 
            table.enu('user_role', ['SUPERADMIN', 'ADMIN', 'LEADER','DISCIPLE']).notNullable(); 
            table.string('email', 255).notNullable();
            table.string('password', 255).nullable();
            table.string('avatar', 255).nullable();
            table.string('invite_code', 255).nullable();
            table.integer('organization_id').unsigned();
            table.foreign('organization_id').references('organizations.id');
            table.timestamps(true, true);
            table.unique('email');

        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("users");
};
