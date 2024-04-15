const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; // environment or local port number

// parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// using static files
app.use(express.static('public'));

// Handling form submission
app.post('/submit', (req, res) => {
  const { name, email, subject, message } = req.body;
  // Process the form data here (e.g., save to a database, send an email)
  console.log('Form submitted:', { name, email, subject, message });
  res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});