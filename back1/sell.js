const express=require('express')
const router=express.Router()
var session = require('express-session')
var url = "mongodb://localhost:27017/";
var dbo
const auth = require('./auth');
var sell = express();
sell.use('/auth',auth);
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
     dbo = db.db("learningbackend");
     
  })
 
  router.post('/sellformdetails',function(req,res){
      console.log(req.session.details);
  myobj={companyname:req.body.companyname,productname:req.body.productname,category:req.body.category,type:req.body.type,brand:req.body.brand,color:req.body.color,realprize:req.body.realprize,discount:req.body.discount,age:req.body.age,size:req.body.size,noofproduct:req.body.noofproducts,image:req.body.image,place:req.body.place,videolink:req.body.videolink};
  console.log('myobj',myobj);
  dbo.collection("sellformdetails").insertOne(myobj, function(err, respond) {
    if(err) {
       console.log(err)
    }
    else {
      //  console.log("DFdsg")
      respond.send(JSON.stringify("succesful"));
    }

  });


  })
module.exports = router;