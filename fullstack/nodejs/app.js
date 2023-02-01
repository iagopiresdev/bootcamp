const express = require('express');
const{ randomUUID } = require('crypto');
const fs = require('fs');
const { response } = require('express');

const app = express();
app.use(express.json());

let products = [];

fs.readFile('products.json', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        products = JSON.parse(data);
    }
});

/**
 * POST => Insert data
 * GET => Get data 
 * PUT => Update data
 * DELETE => Delete data
 */

/**
 * Body => to send data to the server
 * Params => to send data to the server through the URL
 * Query => to send data to the server through the URL id (optional)
 */

app.post('/products', (req, res) => {
    const { name, price } = req.body;
    const product = { name, price, id: randomUUID() };
    products.push(product);
    
    productFile();
    return res.json(product);

});

app.get('/products', (req, res) => {
    return res.json(products);
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(product => product.id === id);
    return res.json(product);
});

app.put('products/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const productIndex = products.findIndex((product) => product.id === id);
    products[productIndex] = { 
        ...products[productIndex],
        name,
        price,
    };
    productFile();

    return res.json({ message: "Product updated!" });
});

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex((product) => product.id === id);
    products.splice(productIndex, 1);


    productFile();
    return res.json({ message: "Product deleted!" });
});

function productFile(){
    fs.writeFile('products.json', JSON.stringify(products), (err) => {
        if(err) throw new Error('Something went wrong!');
        else console.log('File saved!');
    });
}


app.listen(4002, () => console.log('Server running on port 4002'));