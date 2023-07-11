const express = require('express');

const {products} = require('./data.js');

const app = express();

const homePage = `
                    <h1>Home Page</h1>
                    <a href='/api/products'>Products</a>
`;

app.get('/', (req, res)=> {
    res.send(homePage)
});

app.get('/api/products', (req, res)=> {
    const newProds = products.map((item)=> {
        const {id, name} = item;
        return {id, name};
    });
    res.json(newProds);
});


app.get('/api/products/:productID', (req, res)=> {
    const {productID} = req.params;
    const product = products.find((item)=> item.id === Number(productID));
    if(!product) return res.status(404).send('<h1>Product Does Not Exist</h1>');
    res.json(product);
});



app.listen(5000, ()=> {
    console.log('server is listening on 5000');
});