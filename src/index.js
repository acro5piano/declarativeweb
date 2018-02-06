const yaml = require('js-yaml')
const app = require('express')()
const _ = require('lodash')
const fs = require('fs')

module.exports = (yamlString) => {
  const routes = yaml.load(yamlString)

  routes.forEach(route => {
    app[route.method](route.uri, (req, res) => {
      if (_.has(route.return, 'json')) {
        res.set('Content-Type', 'application/json');
        res.send(JSON.stringify(route.return.json))
      } else if (_.has(route.return, 'template')) {
        fs.readFile(__dirname + '/../tests/assets/' + route.return.template, (err, data) => {
          res.set('Content-Type', 'text/html');
          res.send(data)
        })
      }
    })
  })
}

console.log('Listening http://localhost:3000')
app.listen(3000)
