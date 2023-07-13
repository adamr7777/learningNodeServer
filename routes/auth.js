const express = require('express');

const router = express.Router();

let {people} = require('../data');



router.post('/', (req, res)=> {
    const {name} = req.body; 

    if(!name) return res.send('<p>Please enter your name</p>');

    if(people.find((item)=> item.name === name)) {
        res.status(200).send(`<p>Welcome ${name}</p>`);
    }

    else {
        res.send(`<p>Sorry ${name}, your name is not on the list</p>`)
    }
});

module.exports = router;
