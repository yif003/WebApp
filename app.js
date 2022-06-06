const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mongoConnect = require('./util/database');
const user_router = require('./routes/users');
const main_router = require('./routes/Login');
const root = require('./util/root');




app.use(express.static(path.join(root, 'Public')));
app.use(bodyParser.urlencoded({extended: false}));


app.use(user_router);
app.use(main_router);

app.use((req, res, next)=>{
  res.status(404).sendFile(root+'/views/404.html');
})

mongoConnect(client => {
  console.log(client);
  app.listen(3000);
});