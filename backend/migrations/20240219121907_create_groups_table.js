/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
    return knex.schema
    .createTable('groups', function (table) {
        table.increments('id').primary();
        table.string('name', 255).notNullable();
        table.integer('organization_id').unsigned();
        table.foreign('organization_id').references('organizations.id');
        table.enu('level', ['D1', 'D2', 'D3']).notNullable(); 
        table.enu('gender', ['CO-ED', 'ALL GUYS', 'ALL GIRLS']).notNullable(); 
        table.string('avatar', 255).nullable();
        table.integer('created_by').unsigned();
        table.foreign('created_by').references('users.id');
        table.boolean('status');
        table.timestamps(true, true);
        
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("groups");
};
