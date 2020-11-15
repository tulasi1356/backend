var express = require('express');
var cookieParser = require('cookie-parser');
const http = require('http');
var app = express();
var session = require('express-session')
const auth=require('./auth');
const path=require('path')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const bodyparser=require('body-parser') 
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
var sess={
  name:'sid',
  resave:false,
  saveUninitialized:true,
  secret:'a',
  cookie:{
    maxAge:100*60*69*2,
    sameSite:false,
    secure:false,
    httpOnly:false,
  }  
}
app.use(session(sess))
app.use(express.static(path.join(__dirname,'dist/back')))


app.use('/auth',auth);
app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname,'/dist/back/index.html'))
  // app.use(express.static(path.join(__dirname,'auth')))
  
})
app.listen(3000, () => {
  console.log(`serving on port`)
})