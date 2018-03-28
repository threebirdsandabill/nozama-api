'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Token = models.token
const stripe = require('stripe')(
  process.env.STRIPE_SECRET_KEY
)

const authenticate = require('./concerns/authenticate')
// const setUser = require('./concerns/set-current-user')
// const setModel = require('./concerns/set-mongoose-model')

const create = (req, res, next) => {
  console.log(req.body)
  const token = Object.assign(req.body.token, {
    _owner: req.user._id
  })
  console.log('req.body.token.token_id is', req.body.token.token_id)
  console.log('req.body.token.total is', req.body.token.amount)
  Token.create(token)
    .then(token =>
      res.status(201)
        .json({
          token: token.toJSON({ user: req.user })
        }))
        .then(() => {
          const token = req.body.token.token_id
          stripe.charges.create({
            amount: req.body.token.amount,
            currency: "usd",
            source: token,
            description: "Charge for purchase @ Nozama"
          })
        })
    .catch(next)
}

module.exports = controller({
  create
},
  { before: [
//   { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show'] }
//   { method: setModel(Token), only: ['show'] },
//   { method: setModel(Token, { forUser: true }), only: ['update', 'destroy'] }
  ] })
