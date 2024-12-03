// // seed.js
// const mongoose = require('mongoose');
// const User = require("../geerks/User");
// const Order = require("../geerks/Order");

// const mongoURI = "mongodb://localhost:27017/manidb";

// const users = [
//     { userID: 1, name: 'praveen', email: 'praveen@gmail.com' },
//     { userID: 2, name: 'charan', email: 'charan@gmail.com' },
//     { userID: 3, name: 'nani', email: 'nani@gmail.com' }
// ];

// const orders = [
//     { orderId: 1010, userId: 1, product: 'Laptop', amount: 750 },
//     { orderId: 1011, userId: 2, product: 'Laptop', amount: 750 },
//     { orderId: 1012, userId: 3, product: 'Laptop', amount: 750 }
// ];

// mongoose.connect(mongoURI)
//     .then(async () => {
//         console.log('Connected to DB');
//         await User.insertMany(users);
//         console.log('Users inserted successfully');
//         await Order.insertMany(orders);
//         console.log('Orders inserted successfully');
//     })
//     .catch(err => {
//         console.log('Error connecting to DB', err);
//     });
