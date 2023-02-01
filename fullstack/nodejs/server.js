const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if(req.url === "/products"){
        res.end(
            JSON.stringify({
                message: 'Hello products!'
            })
        );
    }

    if(req.url === "/users"){
        res.end(
            JSON.stringify({
                message: 'Hello user!'
            })
        );
    }
})
.listen(4001, () => console.log('Server running on port 3000'));


