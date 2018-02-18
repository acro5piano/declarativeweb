const _ = require('lodash')

module.exports = (req, res, models, action) => {
  const model = models[action.model]

  if (_.has(action, 'create')) {
    const attributes = _(action.create.values)
      .map(value => value.replace('$', ''))
      .map(value => ({ name: value, value: req.body[value]}))
      .mapKeys('name')
      .mapValues(value => value.value)
      .value()
    console.log(models, action.model)
    model.forge(attributes).save()
  }
}
