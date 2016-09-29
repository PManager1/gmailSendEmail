var smtpTransport = require("nodemailer-smtp-transport")
var nodemailer = require('nodemailer');
var express = require('express');
var app = express();
var nodeMailer = require('nodemailer');
var transporter = nodemailer.createTransport();

console.log ( ' coming here 1');



var router = express.Router();
app.use('/sayHello', router);
router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello

function handleSayHello(req, res) {
    // Not the movie transporter!
var transporter = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
        user: 'libertytrustgroupllc@gmail.com',
        pass: 'sharejim'
    }
});


var mailOptions = {
    from: 'libertytrustgroupllc@gmail.com>', // sender address
    to: 'jpca999@gmail.com', // list of receivers
    subject: 'Email Example', // Subject line
    text: 'Hello world ' //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};


console.log ( ' coming here 2');

transporter.sendMail(mailOptions, function(error, info){
	console.log	( ' beginning emial sending '); 
    if(error){
       	console.log('got - error here');    	
        console.log(error);
        res.json({yo: 'error'});
    }else{
    	console.log	( 'no error emial sending ')
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});

}

handleSayHello(); 
