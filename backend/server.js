const
    app = require('./app'),
    http = require('http');

const _port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(_port, err => {
    if (err) console.error(err);
    console.log(`Server running at port ${_port}`)
})
