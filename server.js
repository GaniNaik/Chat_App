// Set up
var express  = require('express');
var app      = express();                    // create our app  express
var morgan = require('morgan');             
var bodyParser = require('body-parser');    // pull information from HTML POST
var methodOverride = require('method-override'); 
var cors = require('cors');
var mongojs = require('mongojs');
var db = mongojs('ChatApp', ['user']);  //  using mongojs module coonnected to nodejs and mongodb , where ChatApp is db name and user is the collection name
 
// Configuration

console.log("connected");

 
app.use(morgan('dev'));                                        
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());
 
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");  
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
 
  app.get('/loginuser:details', function (req, res) {
    var details = req.params.details;
    console.log(details)
    var detail = details.split(',')

  console.log(detail)

    var username = detail[0];
    var password = detail[1];

    db.user.find({ "username": username, "password": password,
     
    }, function (err, doc) {
      res.json(doc);
    });
    
  })

  app.get('/messageuser:details', function (req, res) {


    var details = req.params.details;
    console.log(details)
    var detail = details.split(',')

 
  console.log(detail)


    var username = detail[0];
    var password = detail[1];

    db.user.find( { "username": { $ne: username },

    }, function (err, doc) {
      res.json(doc);
      console.log(doc,"shown")
    });
    
  })

  app.get('/getsingleuser:details', function (req, res) {


    var details = req.params.details;
    console.log(details)
    var detail = details.split(',')

 
  console.log(detail)


    var username = detail[0];
    var password = detail[1];

    db.user.find( { "username": { $eq: username },
    }, function (err, doc) {
      res.json(doc);
      console.log(doc,"shown1")
    });
    
  })

  app.get('/getsendby:details', function (req, res) {


    var details = req.params.details;
    console.log(details)
    var detail = details.split(',')
 
  console.log(detail)

    var sender = detail[1];
    var  receiver = detail[0];

    db.user.find( { $and: [ {  "username": sender }, { "sent by": receiver } ] }, function (err, doc) {
      res.json(doc);
      console.log(doc,"shown2")
    });
    
  })

  app.get('/getmessage:details', function (req, res) {


    var details = req.params.details;
    console.log(details)
    var detail = details.split(',')

 
  console.log(detail)


    var sender = detail[1];
    var  receiver = detail[0];

    db.user.find( { $and: [ {  "username": receiver }, { "sent by": sender } ] }, function (err, doc) {
      res.json(doc);
      console.log(doc,"shown3")
    });
    
  })

  app.post('/registeruser:details', function (req, res) {
    var details = req.params.details;
    console.log(details)
    var detail = details.split(',')

   console.log(detail)

    var username = detail[0];
    var password = detail[1];
   
  
    db.user.insert({ username: username, password: password,
      
 }, function (err, doc) {
      res.json(doc);
     
    });
  })

var msg=[];

  app.post('/sendmsgtouser:details', function (req, res) {
    var details = req.params.details;
    console.log(details)
    var detail = details.split(',')

 
  console.log(detail)

    var sender = detail[0];
    var receiver = detail[1];
  //  var message = detail[2];

      msg.push(detail[2])
        
    db.user.update({ "username": receiver },
      { $set:
         {
           "sent by": sender,
           "message": msg
          
         }
      }, function (err, doc) {
      res.json(doc);
      //console.log(doc)
    });
  })
  
  


var port=8080;
app.listen(port);  
console.log("Server Running  on port  " + port);   // nodejs server running port