const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MONGODB_URI = require('./config/mongodb');
const mongoose = require('mongoose');
const path = require("path");

const port = process.env.PORT || 3000;

//routes
const userRoutes = require('./routes/user_routes');

const app = express();


app.use(express.static(path.join(__dirname, "client", "build")))

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));

app.use(userRoutes);

app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }).then((client)=>{
   console.log("Connected to mongoDB");
   app.listen(port,()=>{
      console.log("Connected to the server.");
   });
}).catch(err=>{
   console.log(err);
});


