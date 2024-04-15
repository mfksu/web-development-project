const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
const port = process.env.PORT || 3000; // environment or local port number

// parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// using static files
app.use(express.static(__dirname));

// Handling form submission
app.post('/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body; //access data
  if (name === ''){ //validation to ensure sections are filled out before submitting 
    res.send('<script>alert("Enter Name");</script>');
  } else if (email ===''){
    res.send('<script>alert("Enter email");</script>');
  } else if (subject === ''){
    res.send('<script>alert("Enter subject");</script>');
  } else if (message === ''){
    res.send('<script>alert("Enter message");</script>');
  } else {
    console.log('Form submitted:', { name, email, subject, message }); //log form data to console
    res.send('<script>alert("Form submitted successfully!");</script>'); //display message 
  }

 
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});