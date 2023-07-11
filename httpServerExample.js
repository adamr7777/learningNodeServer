const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImg = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const aboutPage = readFileSync('./about.html');
const contactPage = readFileSync('./contact.html');

const server = http.createServer((req, res)=> {
    
    const url = req.url;
    switch(url) {
        case '/':  
            res.writeHead(200, {'content-type': 'text/html'});
            res.write(homePage);
            res.end();
            break;
        case '/styles.css':  
            res.writeHead(200, {'content-type': 'text/css'});
            res.write(homeStyles);
            res.end();
            break;
        case '/logo.svg':  
            res.writeHead(200, {'content-type': 'image/svg+xml'});
            res.write(homeImg);
            res.end();
        break;
            case '/browser-app.js':  
            res.writeHead(200, {'content-type': 'text/javascript'});
            res.write(homeLogic);
            res.end();
            break;





        case '/about':
            res.writeHead(200, {'content-type': 'text/html'});
            res.write(aboutPage);
            res.end();
            break;
        case '/contact': 
            res.writeHead(200, {'content-type': 'text/html'});
            res.write(contactPage);
            res.end();
            break;
        default: 
            res.writeHead(404, {'content-type': 'text/html'});
            res.write('<h1>Page Not Found</h1>');
            res.end();
    };
});

server.listen(5000);
// console.log('working')