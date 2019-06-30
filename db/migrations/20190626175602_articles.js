exports.up = function (knex, Promise) {
    return knex.schema.createTable('articles', (table) => {
        table.increments();
        table.string("headline");
        table.string("summary");
        table.string("url");
        table.string("photos");
        table.string("comments");
        table.integer("user_id")
            .notNullable()
            .references('id')
            .inTable('user')
            .onDelete('CASCADE')
            .index();
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('articles');
};