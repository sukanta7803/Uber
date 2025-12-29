const http = require('http');
const app = require('./app');
// console.log(process.env.PORT);
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
})