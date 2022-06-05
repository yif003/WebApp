const http = require('http');
const path = require('path');
const express = require('express');
const user_router = require('./routes/users');
const main_router = require('./routes/main');
const root = require('./util/root');
const app = express();

app.use(express.static(path.join(root, 'Public')));

app.use(user_router);
app.use(main_router);

app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})
const server = http.createServer(app);

server.listen(3000);