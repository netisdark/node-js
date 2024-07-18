const nodemailer=require('nodemailer');
const http = require('http');

http.createServer(function(req,res){
    var transporter=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:"pergap3@gmail.com",
            pass:"pcwakyyzwgalidfs"
        }
    });
    const mailOptions={
        from:'"Daniel" <pergap3@gmail.com>',
        to:'personanemic@gmail.com',
        subject:'Hey There',
        html:'<h1>Hello There</h1>'
    }
    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end('Email Sent Failed');
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        return res.end('Email Sent Succesfully');
    });
}).listen(8080);