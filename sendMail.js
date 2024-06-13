import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const mailOptions = {
    from: {
        name: process.env.USER_NAME,
        address: process.env.MAIL_USER
    },
    to: "",
    subject: "",
    text: "",
    html: "",
    attachments: [
        {
            filename: "resume.pdf",
            path: "./resumes/My_Resume_v3_Developer.pdf", 
        }
    ]
}

const sendingMail = async (email, subject, text, html, resumePath) => {
    try {
        mailOptions.to = email;
        mailOptions.subject = subject;
        mailOptions.text = text;
        mailOptions.html = html;    
        mailOptions.attachments[0].path = resumePath;
        await transporter.sendMail(mailOptions);
        console.log("Message sent!");
    } catch (error) {
        console.log(error);
    }
}

export {sendingMail};