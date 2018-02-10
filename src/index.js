const yaml = require('js-yaml')
const app = require('express')()
const _ = require('lodash')
const fs = require('fs')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

module.exports = (yamlString) => {
  const routes = yaml.load(yamlString)

  routes.forEach(route => {
    app[route.method](route.uri, (req, res) => {
      console.log(req.body)
      if (_.has(route.response, 'json')) {
        res.json(route.response.json)
      } else if (_.has(route.response, 'template')) {
        fs.readFile(__dirname + '/../tests/assets/' + route.response.template, (err, data) => {
          res.set('Content-Type', 'text/html');
          res.send(data)
        })
      } else {
        // Throw NoAvailableResponseError
      }
    })
  })
}

console.log('Listening http://localhost:3000')
app.listen(3000)
