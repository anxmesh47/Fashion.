const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can change the port number

// Middleware to parse JSON and form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static HTML files from a directory named 'public'
app.use(express.static('public'));

// Define a route for handling the login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Perform authentication here (e.g., check against a database)
    // Replace this with your actual authentication logic
    if (username === 'your_username' && password === 'your_password') {
        res.send('Login successful'); // Redirect or respond accordingly
    } else {
        res.send('Login failed'); // Redirect or respond accordingly
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
