const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;
const userRoutes = express.Router();

let User = require('./models/user');

app.use(cors());
app.use(bodyParser.json());

// Connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established succesfully.");
})

// API endpoints

// Getting all the users
userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

// Adding a new user
userRoutes.route('/add').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'User': 'User added successfully'});
        })
        .catch(err => {
            res.status(400).send('Error');
        });
});




// updating the user
userRoutes.route('/update_user').put(function(req, res) {
    let username=req.body.username;
    let type=req.body.type;
    let count=req.body.count;
    let sum=req.body.sum;
    User.updateOne({username:`${username}`,type:`${type}`},{count:`${count}`,sum:`${sum}`},function(err,user){
        if(err){
         console.log("not updated");
        }
        else{
            console.log("updated successfuly");
            res.json(user);
        }
    })
    
});

// Getting a user by id
userRoutes.route('/check1').post(function(req, res) {
    let boddy=req.body;
    Product.findOne(boddy, function(err, product) {
        res.json(product);
    });   
});

// Add Orders in the database

// Getting a user by id
userRoutes.route('/check').post(function(req, res) {
    let boddy=req.body;
    User.findOne(boddy, function(err, user) {
        res.json(user);
    });   
});
app.use('/', userRoutes);
app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});