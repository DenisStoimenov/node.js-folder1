var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer((req, res) => {
    if (req.url == "/fileupload") {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {

            if (err) {
                return res.end();
            }
            const oldpath = files.myFile.filepath;
            const newpath = './' + files.myFile.originalFilename;
            console.log('im here');

            fs.rename(oldpath, newpath, (err) => {
                if (err) return console.log('error uploading file',err);
                res.write('File successfully uploaded');
                return res.end();
            });
                
        });
    } else {


        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form method="post" action="fileupload" enctype="multipart/form-data" >');
        res.write('<input type="file" name="myFile" />');
        res.write('<input type="submit"/>');
        res.write('<form/>');
        return res.end();
    }

}).listen(8080);

//kodot si e dobar,samo treba diskovite da se usoglaseni
