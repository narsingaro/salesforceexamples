var express = require('express');
var url =require('url');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/accountupdate',function (req, res)
{
 var account=JSON.parse(req.body.s);
 console.log(req.body.s);
 console.log(typeof(req.body));
 console.log(account);
 /* for(var i=0;i<account.length;i++)
  {
    console.log('start');
  account[i].newvalue__c = account[i].Id+'     '+account[i].Name+'    '+account[i].Site;
  console.log(account[i].newvalue__c);
  console.log('end');
}*/

  for(var i=0;i<account.length;i++)
  {
    var text='';
    for(var key in account[i])
{
  if(key!='attributes')
  {
    j=0
    console.log(key);
    console.log(account[i].key);
    console.log(account[j].key);
    text=text + account[i].key+' ';
    console.log(text);
  }
}
j++;
account[i].newvalue__c=text;
}
//var account1=JSON.parse(req.body[0]);
/*var account1=JSON.stringify(req.body);
 console.log(req.body);
 console.log(account1);
  for(var i=0;i<account1.length;i++)
  {
    console.log('start1');
  account1[i].newvalue = account1[i].Id+'     '+account1[i].Name+'    '+account1[i].Site;
  console.log(account1[i].newvalue);
  console.log('end1');
}*/
console.log(account);
  res.send(JSON.stringify(account));
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