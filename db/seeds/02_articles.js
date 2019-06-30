exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        { headline: '1', summary: 'rowValue1', url: '', photos: '', comments: '', user_id: 1 },
        { headline: '2', summary: 'rowValue2', url: '', photos: '', comments: '', user_id: 2 },
        { headline: '3', summary: 'rowValue3', url: '', photos: '', comments: '', user_id: 3 }
      ]);
    });
};

