const express = require('express');
const bodyParser = require('body-parser');

const MONGODB_URI = require('./config/mongodb');
const mongoose = require('mongoose');

//routes
const userRoutes = require('./routes/user_routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));

app.use(userRoutes);

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }).then((client)=>{
   console.log("Connected to mongoDB");
   app.listen(3000,()=>{
      console.log("Connected to the server.");
   });
}).catch(err=>{
   console.log(err);
});


