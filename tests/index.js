const web = require('../src')
const fs = require('fs')

fs.readFile(__dirname + '/assets/app.yml', 'utf8', (err, routes) => {
  web(routes)
})
