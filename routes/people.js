const express = require('express');

const peopleRouter = express.Router();

let {people} = require('../data');



peopleRouter.get('/', (req, res)=> {
    res.status(200).send({success: true, data: people});
});

peopleRouter.post('/', (req, res)=> {
    const {name} = req.body;
    console.log(name);
    if(!name) return res.status(400).json({success: false, msg: 'enter your name'});
    res.status(201).json({success: true, person: name});
});


peopleRouter.put('/:id', (req, res)=> {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((item)=> item.id === Number(id));
    person.name = name;
    res.status(200).json({status: 'success', data: people});
});

peopleRouter.delete('/:id', (req, res)=> {
    const {id} = req.params;
    const person = people.find((item)=> item.id === Number(id));
    if(person) {
        const newPeople = people.filter((item)=> item.id !== Number(id));
        res.status(200).json({status: 'success', data: newPeople});
    };
});

peopleRouter.post('/postman', (req, res)=> {
    const {name} = req.body;
    res.json({status: 'success', data: {person: name}});
});

module.exports = peopleRouter;