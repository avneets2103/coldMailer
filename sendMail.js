import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587, // Ensure this is the correct port
  secure: false, // Use TLS
  auth: {
    user: `avneets2103@gmail.com`,
    pass: `rwtgpbbneaxwoyze`
  },
});

const mailOptions = {
    from: {
        name: "smartkart",
        address: process.env.MAIL_USER
    },
    to: "avneet.bedi.ug21@nsut.ac.in",
    subject: "Hello",
    text: "Hello World!",
    html: "<h1>Hello World!</h1>"
}

const sendingMail = async (email, subject, text, html) => {
    try {
        mailOptions.html = html;    
        mailOptions.to = email;
        mailOptions.subject = subject;
        mailOptions.text = text;
        await transporter.sendMail(mailOptions);
        console.log("Message sent!");
    } catch (error) {
        console.log(error);
    }
}

export {sendingMail};