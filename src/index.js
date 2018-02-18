const yaml = require('js-yaml')
const app = require('express')()
const _ = require('lodash')
const fs = require('fs')
const bodyParser = require('body-parser')

const db = require('./modules/db')

app.use(bodyParser.json())

module.exports = (yamlString) => {
  const routes = yaml.load(yamlString)

  routes.forEach(route => {
    app[route.method](route.uri, (req, res) => {
      if (_.has(route, 'database')) {
        const model = db[route.database.insert.model]
        model.forge(req.body).save()
      }

      if (_.has(route.response, 'json')) {
        res.json(route.response.json)
      } else if (_.has(route.response, 'template')) {
        fs.readFile(__dirname + '/../tests/assets/' + route.response.template, (err, data) => {
          res.set('Content-Type', 'text/html');
          res.send(data)
        })
      } else if (_.has(route.response, 'collection')) {
        const model = db[route.response.collection.model]
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
