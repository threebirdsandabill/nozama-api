'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Item = models.item

const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  Item.find()
    .then(items => res.json({
      items: items.map((e) =>
        e.toJSON({ virtuals: true }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    item: req.item.toJSON({ virtuals: true })
  })
}

module.exports = controller({
  index,
  show
}, { before: [
  { method: setModel(Item), only: ['show'] }
] })
