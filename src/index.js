const yaml = require('js-yaml')
const app = require('express')()
const _ = require('lodash')
const fs = require('fs')
const bodyParser = require('body-parser')

const database = require('./modules/database')

const modelParser = require('./parseModel')

app.use(bodyParser.json())

module.exports = (appDefinition, modelDefinition) => {
  const models = _(yaml.load(modelDefinition))
    .map(obj => modelParser.parse(obj))
    .keyBy('name')
    .mapValues(wrap => wrap.model)
    .value()

  const routes = yaml.load(appDefinition)

  routes.forEach(route => {
    app[route.method](route.uri, (req, res) => {
      if (_.has(route, 'database')) {
        database(req, res, models, route.database)
      }

      if (_.has(route.response, 'json')) {
        res.json(route.response.json)
      } else if (_.has(route.response, 'template')) {
        fs.readFile(__dirname + '/../tests/assets/' + route.response.template, (err, data) => {
          res.set('Content-Type', 'text/html');
          res.send(data)
        })
      } else if (_.has(route.response, 'collection')) {
        const model = database[route.response.collection.model]
        model.fetchAll().then(users => {
          res.json(users.toJSON())
        })
      } else {
        // Throw NoAvailableResponseError
      }
    })
  })
}

console.log('Listening http://localhost:3000')
app.listen(3000)
