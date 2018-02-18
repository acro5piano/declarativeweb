exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('email')
    table.string('password')
  }).then(() => {
    return knex.schema.createTable('articles', table => {
      table.increments('id').primary()
      table.integer('user_id')
      table.string('content')
    })
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users').then(() => {
    knex.schema.dropTable('articles')
  })
}

