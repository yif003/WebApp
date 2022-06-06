const http = require('http');
const path = require('path');
const express = require('express');
const user_router = require('./routes/users');
const main_router = require('./routes/Login');
const root = require('./util/root');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static(path.join(root, 'Public')));
app.use(bodyParser.urlencoded({extended: false}));


app.use(user_router);
app.use(main_router);

app.use((req, res, next)=>{
  res.status(404).sendFile(root+'/views/404.html');
})

const server = http.createServer(app);

server.listen(3000);