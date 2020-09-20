const express=require('express')
const router=express.Router()
// console.log('>>>>>>>>>>>>>>>')
const nodemailer = require('nodemailer');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo
const bcrypt = require('bcrypt');
const { getMaxListeners } = require('process');
const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
     dbo = db.db("learningbackend");
     
  })
  
  router.post('/signup',function(req,res){
    // NODEMAILER
    // var nodemailer = require('nodemailer');




    // console.log('hello',req.body);
    var email= req.body.email
    console.log(email)
    dbo.collection("registerdetails").find({email:email}).toArray(function(err, result) {
      console.log('reeeee',result);
      if(result.length > 0) {
        if(result[0].verify == true) {
          // console.log('if loop')
          res.send(JSON.stringify('account exists'));
          // console.log(result)
        } 
        else if(result[0].verify === false) {
          res.send(JSON.stringify('verification incomplete'))
        }
      }

      else {
        console.log('else')
        
      const hash = bcrypt.hashSync(req.body.password, saltRounds);

        
        myobj={name:req.body.username,email:req.body.email,password:hash,verify:false}
            dbo.collection("registerdetails").insertOne(myobj, function(err, res) {
                    if (err) throw err;
                });
      }
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'wolvesofthevalleysspardha@gmail.com',
          pass: 'fmt@12345'
        }
      });
      // console.log(req.body.password,'password')
      const hash = bcrypt.hashSync(req.body.password, saltRounds);

      console.log(hash)
      var mailOptions = {
        from: 'devasanna',
        to: req.body.email,
        subject: 'Verification code',
        text:hash,
        html:'welcome Mr.'+req.body.name+ hash+ 'to confirm your mail <a href="http://localhost:3000/verify'+'">click</a><br>'
      };
      // console.log(response.id,'res');
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
        // res.send('Check ur email');      
    });
    // var userdetails=new users()
    // userdetails.username=req.body.username
        // userdetails.userid=req.body.email
        // userdetails.useremailid=req.body.email
        // myobj = {id:userdetails.userid,name:userdetails.name,email:userdetails.useremailid};
        // console.log('object',myobj)
     
    
})
router.post('/verify',function(req,res) {
  dbo.collection("registerdetails").find({password:req.body.code}).toArray(function(err, result) {
    // console.log('password',result.length)
    if(result.verify == true) {
      res.send(JSON.stringify('verification completed'))
    }
    if(result.length == 0){
      res.send(JSON.stringify('invalid'))
    }
    if(result.length > 0 &&  result[0].password === req.body.code) {
      result[0].verify = true;
      // console.log('succesfully uploaded')
      res.send(JSON.stringify('sucessfully completed'))
    } 
  })
})
router.post('/login',function(req,res){
  dbo.collection("registerdetails").find({email:req.body.email}).toArray(function(err, result) {
    console.log('result',result);
    
    // console.log('............',bcrypt.compareSync());
    if(result.length > 0 &&  !bcrypt.compareSync(req.body.password,result[0].password)) {
      // console.log(result[0].password,'l',req.body.password)
      res.send(JSON.stringify('password is incorrect'))
    } else if(result.length === 0) {
      res.send(JSON.stringify('account does not exit'))
    } else {
      res.send(JSON.stringify('proceed'))
    }
 

  })

})
module.exports = router;