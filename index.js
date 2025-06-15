const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Test route to verify server is running current code
app.get('/test', (req, res) => {
  res.send('Server is running your code!');
});

// POST route to handle contact form submissions
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`📩 New message from ${name} (${email}): ${message}`);

  res.send(`
    <html>
      <head><title>Thank You</title></head>
      <body style="font-family: sans-serif; padding: 2rem;">
        <h1>Thank you, ${name}!</h1>
        <p>We’ve received your message and will get back to you soon.</p>
        <a href="/">Back to homepage</a>
      </body>
    </html>
  `);
});

// Start the Express server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

