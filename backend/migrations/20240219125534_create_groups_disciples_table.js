/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('groups_disciples', function (table) {
        table.increments('id').primary();
        table.integer('group_id').unsigned();
        table.foreign('group_id').references('groups.id');
        table.enu('status', ['ACTIVE', 'DROPPING', 'ARCHIEVED']).notNullable(); 
        table.timestamps(true, true);
        
    })
};
"group_disciple_id","group_id","user_id",
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("groups_disciples");
};
