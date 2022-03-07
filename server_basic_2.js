let http = require('http');
let url = require('url');
let fs = require('fs');
let rs = fs.createReadStream('./demo.txt');
let events = require('events');
const {EventEmitter} = require('events');
let eventEmitter = new events.EventEmitter();

// Create an event handler
let myEventHandler = function(){
  console.log('I hear scream');
}
// Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event:
eventEmitter.emit('scream');



//rs.on('open',function(){
//  console.log('The file is open');
//})

http.createServer(function(req,res){
  let q = url.parse(req.url, true);
  let filename = "." + q.pathname; // ./somepath
  fs.readFile(filename,function(err,data){
    if (err) {
      res.writeHead(404,{'Content-Type':'text/html'});
      return res.end('404 Not Found')
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  })
}).listen(8000);