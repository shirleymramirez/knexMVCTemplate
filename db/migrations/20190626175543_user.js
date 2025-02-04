exports.up = function (knex, Promise) {
  return knex.schema.createTable('user', (table) => {
    table.increments();
    table.string("name");
    table.string("email").unique();
    table.string("password");
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('user');
};