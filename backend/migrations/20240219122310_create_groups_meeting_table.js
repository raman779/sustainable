/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('groups_meetings', function (table) {
        table.increments('id').primary();
        table.date('meeting_date').notNullable();
        table.time('meeting_time').notNullable();
        table.timestamp('starting_time').notNullable();
        table.string('meeting_place',255).nullable();
        table.int('meeting_weeks',4).nullable();


        table.integer('organization_id').unsigned();
        table.foreign('organization_id').references('organizations.id');
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
    .dropTable("groups_meetings");
};
