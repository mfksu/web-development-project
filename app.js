const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const nodemailer = require('nodemailer')

const app = express();
const port = process.env.PORT || 3000; // environment or local port number

//transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587, 
  secure: false,
  auth: {
    user: 'gregg.hartmann@ethereal.email',  //generated email and pass for security purposes
    pass: 'GQ4MuX6yb634XFPXPd'              
  }
});

// parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// using static files
app.use(express.static(__dirname));

// Handling form submission
app.post('/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body; //access data
  if (name === ''){ //validation to ensure name is filled out 
    res.send('<script>alert("Enter Name");</script>');
  } else if (email ===''){ //validation to ensure email is filled out
    res.send('<script>alert("Enter email");</script>');
  } else if (subject === ''){ //validation to ensure subject is filled out
    res.send('<script>alert("Enter subject");</script>');
  } else if (message === ''){ //validation to ensure message is filled out
    res.send('<script>alert("Enter message");</script>');
  } else {
    console.log('Form submitted:', { name, email, subject, message }); //log form data to console


    //send email
    const mailOptions = {
      from: 'gregg.hartmann@ethereal.email',
      to: 'gregg.hartmann@ethereal.email',
      subject: "Form submission",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Subject: ${subject}</p>
        <p>Message: ${message}</p>

      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error:', error);
        res.send('<script>alert("Error";</script>');
      } else {
        console.log("Email sent", info.response);
        res.send('<script>alert("Form submitted successfully.");</script>');
      }
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});