// # Import Package
const express = require('express');
const cors = require('cors');

// # Setup Express
const app = express();
const port = 3000;

// # Set Middleware
// => Parsing Request -> JSON
app.use(express.json());
// => Parsing Request Form URL Encoded: Upload File, Kirim Data Dari Form
app.use(express.urlencoded({
	extended: true
}));

// # Create End Point / Routing
app.get('/', (req, res) => {
	res.status(200);
	res.json({
		message: "Welcome to Express API Tutorial!"
	});
});

app.listen(port, () => {
  console.info(`Mongo Express API Listening in http://localhost:${port}/`);
});