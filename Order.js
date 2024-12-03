
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: Number,
    userId: Number,
    product: String,
    amount: Number
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
