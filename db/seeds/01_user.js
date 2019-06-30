exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { name: 'Shirley Ramirez', email: 'shirley@yahoo.com', password: 'yahoo' },
        { name: 'Seth Ramirez', email: 'seth@yahoo.com', password: 'yebaa' },
        { name: 'Dan Ramirez', email: 'dan@yahoo.com', password: 'google' }
      ]);
    });
};
