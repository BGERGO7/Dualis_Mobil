const express = require('express');
const app = express();

require("dotenv").config(); // Load environment variables from .env file

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


var port = process.env.PORT || 5000; // Use PORT from .env or default to 5000

require("./routes/index")(app); // Import and use routes

app.listen(port);

console.log(`Az alkalmazás ezen a porton fut: ${port}`);

module.exports = app;   