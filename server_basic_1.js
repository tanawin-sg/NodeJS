let http = require('http');
let dt = require('./myfirstmodule');
let url = require('url');
let fs = require('fs');

let adr = 'http://localhost:8000/default.html?year=2022&month=march';
let q = url.parse(adr,true);

console.log(q.host);// return localhost:8000
console.log(q.pathname);
console.log(q.search);

let qdata = q.query;
console.log(qdata);
console.log(qdata.year + qdata.month);

//http.createServer(function(req,res){
  //res.writeHead(200,{'content-Type':'text/html'});
  //res.write('The date and time are currently : ' + dt.myDateTime())
  //res.write('<br>');
  //res.write(req.url);
  //res.end('<br>Hello World');
  //let q = url.parse(req.url,true).query;
  //let txt = q.year + " " + q.month;
  //res.end(txt);

  //fs.readFile('index.html',function(err,data){
  //  res.writeHead(200,{'content-Type':'text/html'});
  //  res.write(data);
  //  return res.end();
  //})
  
//}).listen(8000);

//fs.appendFile('mynewfile3.txt','This is update text.',function(err){
  //if (err) throw err;
  //console.log('Save');
//})