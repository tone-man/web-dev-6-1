let http = require('http');
let url = require('url');

// Basic use case
http.createServer( function (req, res) {
    let query = url.parse(req.url, true); // Use url library to parse url
    
    if (query.pathname =='/') {
        res.writeHead(200 , {'Content-Type': "text/html"});
        res.write("<h1> Hello World! </h1>"); // This is showing that it is html.
        res.end();
    }
    else {
        res.writeHead(200 , {'Content-Type': "text/html"});
        res.write("<h1> Your query is! </h1>"); // This is showing that it is html.
        res.write(JSON.stringify(query));
        res.end();
    }
}).listen(5000);

/** 
 * This server will cause an err due to an attempt to
 * write to stream after res.end()
*/
/*
http.createServer(function (req, res) {

    if (req.url) {
        res.writeHead(200 , {'Content-Type': "text/html"});
        res.write("<h1> Hello World! </h1>");
        res.end();
    }

    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write("No page found.")

}).listen(5000);
*/
