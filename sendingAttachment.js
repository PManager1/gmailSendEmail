var nodemailer = require('nodemailer');
 
// create reusable transporter object using the default SMTP transport 
var transporter = nodemailer.createTransport('smtps://libertytrustgroupllc@gmail.com:sharejim@smtp.gmail.com');
 
// setup e-mail data with unicode symbols 
var mailOptions = {
    from: '"14:16-localFred Foo 👥" <foo@blurdybloop.com>', // sender address 
    to: 'libertytrustgroupllc@gmail.com', // list of receivers you can have more comma seperated list of people. 
    subject: 'Hello ✔', // Subject line 
    text: 'Hello world 🐴', // plaintext body 
    html: '<b>Hello world 🐴</b>',  // html body 
    attachments: [
        {   // utf-8 string as an attachment 
            filename: 'attachments/coontract.pdf',
            contentType: 'application/pdf',
            path: '/Users/jay/code/gmailSendEmail/attachments/contract.pdf'
            // path: 'http://files.glasistre.hr/GlasIstre.pdf'
            // content: 'hello world!',
        }
        ]
};
 
// send mail with defined transport object 
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});