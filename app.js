let formidable = require('formidable');
let http = require('http');
let fs = require('fs');

http.createServer(function(req,res){
  if(req.url == '/fileupload'){
    let form = new formidable.IncomingForm();
    form.parse(req,function( err, fields, files){
      let oldpath = files.fileupload.filepath;
      //let oldpath = files.fileupload.filepath;
      
      //let newpath = 'D:/Github/NodeJS/img/'+ files.fileupload.name;
      let newpath = 'C:/Github/NodeJS/img/'+ files.fileupload.name + '.jpg';
      fs.rename(oldpath, newpath, function(err){
        if(err) throw err;
        res.write('File uploaded and move');
        res.end();
      })
      res.write('oldpath : ' + oldpath + ' newpath :' + newpath);
      //res.write(newpath);
      //res.write('fales Uploaded');
      res.end();
    })
  }else{
    res.writeHead(200,{'content-Type':'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="fileupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8000);