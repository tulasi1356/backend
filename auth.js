const express=require('express')
const router=express.Router()
// console.log('>>>>>>>>>>>>>>>')
const nodemailer = require('nodemailer');
var MongoClient = require('mongodb').MongoClient;
var session = require('express-session')
var url = "mongodb://localhost:27017/";
var dbo
var OTP
const bcrypt = require('bcrypt');
const { getMaxListeners } = require('process');
const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
     dbo = db.db("learningbackend");
     
  })

  // USED TO DELETE DATA IN COLLECTION
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   //Delete the "customers" collection:
  //   dbo.collection("customers").drop(function(err, delOK) {
  //     if (err) throw err;
  //     if (delOK) console.log("Collection deleted");
  //     db.close();
  //   });
  // });
  
  router.post('/signup',function(req,res){
    var email= req.body.email
    console.log(email)
    dbo.collection("registerdetails").find({email:email}).toArray(function(err, result) {
      // console.log('reeeee',result);
      if(result.length > 0 && result[0].verify == true) {
        if(result[0].verify == true) {
          // console.log('if loop')
          res.send(JSON.stringify('account exists'));
          // console.log(result)
        } 

      }

      else {
        console.log('else')
        
      const hash = bcrypt.hashSync(req.body.password, saltRounds);

        
        myobj={name:req.body.username,email:req.body.email,password:hash,verify:false}
        req.session.details=myobj;
        console.log(req.session.details,'sesssssssssss')
            dbo.collection("registerdetails").insertOne(myobj, function(err, res) {
                    if (err) throw err;
                });
      }
     
      // console.log(req.session.details,'session0')
      
      const hash = bcrypt.hashSync(req.body.password, saltRounds);
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'wolvesofthevalleysspardha@gmail.com',
          pass: 'fmt@12345'
        }
      });
      // console.log(req.body.password,'password')
      var digits = '0123456789'; 
      OTP = ''; 
      for (let i = 0; i < 4; i++ ) { 
          OTP += digits[Math.floor(Math.random() * 10)]; 
      } 
      console.log('OTP',OTP)
      // console.log(req,'==res')
      var mailOptions = {
        from: 'devasanna',
        to: req.body.email,
        subject: 'Verification code',
        text:hash,
        html:'welcome Mr.'+req.body.name+ 'to confirm your mail <a href="http://localhost:3000/verify'+'">click</a><br>'+'your verification code is'+OTP
      };
      // console.log(response.id,'res');
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });      
    });
     
    
})
router.post('/verify',function(req,res) {
  // console.log('otp in ver',OTP,req.body.code)
  console.log(req.session.details,'session',)
  dbo.collection("registerdetails").find({email:req.session.details.email}).toArray(function(err, result) {
    console.log('password',result.length)
    if(result.verify == true) {
      res.send(JSON.stringify('verification completed'))
    }
    if(result.length == 0){
      res.send(JSON.stringify('invalid'))
    }
    if(result.length > 0 &&  OTP === req.body.code) {
      result[0].verify = true;
      // console.log('succesfully uploaded')
      res.send(JSON.stringify('sucessfully completed'))
    } 
  })
})
router.post('/login',function(req,res){
  dbo.collection("registerdetails").find({email:req.body.email}).toArray(function(err, result) {
    console.log('result',result);
    
    // console.log('............',result[0].password,bcrypt.compareSync(req.body.password,result[0].password),bcrypt.compareSync(result[0].password,req.body.password));
    if(result.length > 0 &&  !bcrypt.compareSync(req.body.password,result[0].password)) {
      // console.log(result[0].password,'l',req.body.password)
      res.send(JSON.stringify('password is incorrect'))
    } else if(result.length === 0) {
      res.send(JSON.stringify('account does not exit'))
    } else {
      res.send(JSON.stringify('proceed'))
      req.session.details = req.body
    }
 

  })

})
module.exports = router;