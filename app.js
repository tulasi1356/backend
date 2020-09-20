var express = require('express');
var cookieParser = require('cookie-parser');
// var mongodb =require;
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
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  // cookie: { secure: true }
}))
// app.use(cors())
app.use(express.static(path.join(__dirname,'dist/back')))
app.get('/*',function(req,res){
  // console.log(__dirname,'////')
  res.sendFile(path.join(__dirname,'/dist/back/index.html'))
  // console.log('ppppppppppppppp')
  // 
  // app.use(express.static(path.join(__dirname,'auth')))
  
})

app.use('/auth',auth);
app.listen(3000, () => {
  console.log(`serving on port`)
})