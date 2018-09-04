var express = require('express');
var url =require('url');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/accountupdate',function (req, res)
{
 var account=req.body;
 console.log(req.body);
 console.log(account);
  for(var i=0;i<account.length;i++)
  {
  account[i].newvalue = account[i].Id+'     '+account[i].Name+'    '+account[i].Site;
}
console.log(account);
  res.send(account);
 /*var account=[{
  "attributes":{"type":"Account","url":"/services/data/v43.0/sobjects/Account/0017F00000snrOrQAI"},
  "Id":"0017F00000snrOrQAI",
  "Name":"test again"
},
{
  "attributes":{"type":"Account","url":"/services/data/v43.0/sobjects/Account/0017F00000wBqxfQAC"},
  "Id":"0017F00000wBqxfQAC",
  "Name":"vbnm,"
},
{"attributes":{"type":"Account","url":"/services/data/v43.0/sobjects/Account/0017F00000vGG0vQAG"},
"Id":"0017F00000vGG0vQAG",
"Name":"dfxghjk"
},
{
  "attributes":{"type":"Account","url":"/services/data/v43.0/sobjects/Account/0017F00000snrMqQAI"},
  "Id":"0017F00000snrMqQAI",
  "Name":"test"
},
{
  "attributes":{"type":"Account","url":"/services/data/v43.0/sobjects/Account/0017F00000snrRpQAI"},
  "Id":"0017F00000snrRpQAI",
  "Name":"testingfdwjhk"
}
  ];
  //account[0].newvalue = account[0].Id+'     '+account[0].Name+'    '+account[0].Site;

for(var i=0;i<account.length;i++)
  {
  account[i].newvalue = account[i].Id+'     '+account[i].Name+'    '+account[i].Site;
}
res.send(account);*/
});
    
var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});