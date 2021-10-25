//requiring modules installed
const express = require('express');
const ejs = require('ejs')
const mongoose = require('mongoose');  

const app = express();

//middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies
app.use(express.static("public"));


//Mongoose connection
mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true});

const articleSchema = {
  title: String,
  content: String,
  resource: String
};

const Article = mongoose.model('Article', articleSchema);

//Routes
app.get('/articles', function(req,res){
  Article.find({}, function(err, AllArticles){
    if(!err){
      res.send(AllArticles)
    }else{
      console.log(err)
    }
  });
});

//server 
app.listen(4000, () => console.log('app listening on port 4000!'));