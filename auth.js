

const auth = (req, res, next)=> {
    if(req.query.user === 'john') {
        console.log('the user has authed');
        req.user = {name: 'john', id: '1'};
        next();
    }

    else {
        res.send('<h1>User has not been authed</h1>');
    };
}; 



module.exports = auth;