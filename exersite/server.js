const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

console.log('Starting server... very slay');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.post('/api/exercise', (req, res) => {
	console.log('glizzyyyyy');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});