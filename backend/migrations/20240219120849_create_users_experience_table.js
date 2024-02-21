/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('users_experience', function (table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().unique();
        table.foreign('user_id').references('users.id');

        table.boolean('attended_live_workshop');
        table.boolean('attended_virtual_workshop');
        table.boolean('attended_no_of_the_above');

        table.boolean('read_how_to_make_disciples');
        table.boolean('read_well_made_well_done');
        table.boolean('read_none_of_the_above');

        table.boolean('coached');
        table.boolean('coaching');
        
        table.boolean('finished_D1');
        table.boolean('finished_D2');
        table.boolean('finished_D3');
        table.boolean('finished_N/A');

        table.boolean('lead_D1');
        table.boolean('lead_D2');
        table.boolean('lead_D3');
        table.boolean('lead_N/A');

        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("users_experience");
};
