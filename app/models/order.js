'use strict'

const mongoose = require('mongoose')
const Item = require('./item.js')

const orderSchema = new mongoose.Schema({
  orderDate: {
    type: Date,
    required: true
  },
  items: [{
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item'
    },
    quantity: {
      type: Number,
      required: true
    },
    cost: {
      type: Number,
      required: true
    }
  }],
  orderTotal: {
    type: Number,
    required: true
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret, options) {
      const userId = (options.user && options.user._id) || false
      ret.editable = userId && userId.equals(doc._owner)
      return ret
    }
  }
})
// orderSchema.virtual('totalCost').get(function () {
//   let total = 0
//   for (let i = 0; i > this.items.length; i++) {
//     total = (this.items[i].quantity * this.items[i].cost)
//   }
//   return total
// })

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
