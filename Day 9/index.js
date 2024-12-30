//1. import nodemailer
const nodemailer=require('nodemailer');
//2. Configure email and send it.
async function sendMail(){
    //1. Create an email transporter
    // SMTP (Simple Mail Transfer Protocol)
    let transporter = nodemailer.createTransport({
service: 'gmail',auth: {user: 'codingninjas2k16@gmail.com',pass: 'slwvvlczduktvhdj'}
});
            //2. Define the email details
let mailOptions = {
                from: 'your-email@gmail.com',
                to: 'recipient-email@gmail.com',
                subject: 'Sending Email using Node.js',
                text: 'That was easy!'
                };
                //3. Send the email .
                try{
                    let info = await transporter.sendMail(mailOptions);
                    console.log('Email sent: sucessfuly');
                }
                //4. Return the result
                catch(err){
                    console.log('Error occurred ');
                }
}
sendMail();