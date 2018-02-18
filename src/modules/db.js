const knexConfig = require('knexfile.js').development
const knex = require('knex')(knexConfig)

const bookshelf = require('bookshelf')(knex)

const User = bookshelf.Model.extend({
  tableName: 'users'
})

module.exports = { User }
