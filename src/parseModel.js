const knexConfig = require('knexfile.js').development
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const pluralize = require('pluralize')
const _ = require('lodash')

module.exports = {
  parse(model) {
    return {
      name: model.name,
      model: bookshelf.Model.extend({
        tableName: pluralize(_.snakeCase(model.name))
      })
    }
  },
}
