const path = require('path');

const seedFile = require('knex-seed-file');

exports.seed = function(knex, Promise) {
    knex('users').del()
    .then(() => {
      return seedFile(knex, path.resolve('./users.csv'), 'users', [
      'id',
      'username',
      'password'
      ], {
        columnSeparator: ';',
        ignoreFirstLine: true
      })
    });
};
