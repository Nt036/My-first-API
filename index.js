const express = require('express');
const connectDB = require("./db")

require("dotenv").config();

const Product = require("./models/Product");


const app = express();





//Middleware
app.use(express.json());



app.get('/', (request,response) => {
    response.send('welcome to my backend server!');
});


//HTTP METHODS: GET, POST, PUT, DELETE,PATCH

app.get('/about', (req, res) => {
    res.send('This is my about page !');
});

app.get('/contact', (req,res) => {
    res.send('This is my contact page');
});

//Route parameters
app.get('/users/:id', (req,res) =>{
    const userId = req.paras.id;
    res.send('User ID is: ' + userId);
});


//Query parameters
app.get('/search', (request,response) => {
    const query = request.query.q;
    response.send('You searched for: ' + query);
});


//JSON response
app.get('/products', (request,response) => {
    const products = [
        {id: 1, name: 'Product 1', price: 100},
        {id: 2, name: 'Product 2', price: 200},
        {id: 3, name: 'Product 3', price: 300},

    ];
    response.json(products)
});


let products = []


//Post request
app.post('/products', (req,res) => {

    const {name ,price} = req.body;

    const newProduct = {
        id:products.length + 1,
        name,
        price,
    }

    products.push(newProduct);

    res.status(201).json({
        message: "Product added",
        product: newProduct
    });
});

app.post('/save.product', async (req,res) => {
    try {
        const product = new Product(req.body);
       // await product.save();
       // res.json(product);
    } catch (error) {
       res.status(500).json({error: error.message})
    }
})




   app.listen(process.env.PORT, () => {
        console.log("server is running on port" + process.env.PORT);

    })

connectDB();