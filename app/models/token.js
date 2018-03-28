'use strict'

const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
  token_id: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Token = mongoose.model('Token', tokenSchema)

module.exports = Token
