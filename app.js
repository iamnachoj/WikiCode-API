//requiring modules installed
const express = require('express');
const mongoose = require('mongoose');  
//middleware
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded()); //Parse URL-encoded bodies

//TODO

//server 
app.listen(4000, () => console.log('Example app listening on port 4000!'));