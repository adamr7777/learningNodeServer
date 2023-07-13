const express = require('express');

const {people} = require('./data');


const app = express();

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false}));

app.get('/api/v1/people', (req, res)=> {
    res.status(200).send({success: true, data: people});
});

app.post('/login', (req, res)=> {
    const {name} = req.body; 

    if(!name) return res.send('<p>Please enter your name</p>');

    if(people.find((item)=> item.name === name)) {
        res.status(200).send(`<p>Welcome ${name}</p>`);
    }

    else {
        res.send(`<p>Sorry ${name}, your name is not in the list</p>`)
    }
});

app.listen(5000, ()=> console.log('server listens on 5000'));
