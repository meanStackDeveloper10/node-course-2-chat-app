const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

let publicPath = path.join(__dirname, '../public');
let port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})

