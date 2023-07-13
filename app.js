const express = require('express');

const peopleRouter = require('./routes/people');
const loginRouter = require('./routes/auth');


const app = express();

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/people', peopleRouter);
app.use('/login', loginRouter);




app.listen(5000, ()=> console.log('server listens on 5000'));
