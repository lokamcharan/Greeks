
// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// const port = 4000;

// app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/manidb")
//     .then(() => {
//         console.log("DB Connected");
//     })
//     .catch(() => {
//         console.log("DB Not Connected");
//     });

// app.get("/", (req, res) => {
//     console.log("Welcome");
//     res.send("Welcome");
// });

// app.listen(port, () => {
//     console.log(`Server is running at port ${port}`);
// });


const express = require("express");
const mongoose = require("mongoose");
const User = require("../geerks/User");
const Order = require("../geerks/Order");

const app = express();
const port = 4000;

app.use(express.json());

const mongoURI = "mongodb://localhost:27017/manidb";

const users = [
    { userID: 1, name: 'praveen', email: 'praveen@gmail.com' },
    { userID: 2, name: 'charan', email: 'charan@gmail.com' },
    { userID: 3, name: 'nani', email: 'nani@gmail.com' }
];

const orders = [
    { orderId: 1010, userId: 1, product: 'Laptop', amount: 750 },
    { orderId: 1011, userId: 2, product: 'Laptop', amount: 750 },
    { orderId: 1012, userId: 3, product: 'Laptop', amount: 750 }
];

// Connect to MongoDB and insert data on server start
mongoose.connect(mongoURI)
    .then(async () => {
        console.log("DB Connected");

        // Seed data only if collections are empty
        const userCount = await User.countDocuments();
        const orderCount = await Order.countDocuments();

        if (userCount === 0) {
            await User.insertMany(users);
            console.log('Users inserted successfully');
        } else {
            console.log('Users already exist');
        }

        if (orderCount === 0) {
            await Order.insertMany(orders);
            console.log('Orders inserted successfully');
        } else {
            console.log('Orders already exist');
        }
    })
    .catch((err) => {
        console.log("Error connecting to DB", err);
    });

app.get("/", (req, res) => {
    console.log("Welcome");
    res.send("Welcome");
});


app.get("/users", async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from the database
        res.status(200).json(users);     // Send users as JSON response
    } catch (err) {
        res.status(500).json({ error: "Failed to retrieve users" });
    }
});


app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});


