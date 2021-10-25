//requiring modules installed
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');  
//middleware
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded()); //Parse URL-encoded bodies

//

//server 
app.listen(4000, () => console.log('Example app listening on port 4000!'));