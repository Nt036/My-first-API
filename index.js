const express = require('express');

const app = express();





//Middleware
app.use(express.json());



app.get('/', (request,response) => {
    response.send('welcome to my backend server!');
});


//HTTP METHODS: GET, PUT, DELETE
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


app.post

   app.listen(process.env.PORT, () => {
        console.log('server is running on port' + PORT)

    })

    //mongodbdatabase
//mongodb+srv://trinah:mongodbdatabase@cluster0.lgnlw0v.mongodb.net/