const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename : __dirname + '/../tests/database.sqlite3',
    charset  : 'utf8'
  },
  useNullAsDefault: true
})

const bookshelf = require('bookshelf')(knex)

knex.schema.createTable('users', table => {
  table.increments('id').primary()
  table.string('email')
  table.string('password')
})

const User = bookshelf.Model.extend({
  tableName: 'users'
})

User.where('id', 1).fetch().then(user => {
  console.log(user.toJSON())
}).catch(err => {
  console.log(err)
})
