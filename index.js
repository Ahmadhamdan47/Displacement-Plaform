const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models'); // Sequelize models, automatically loaded from models/index.js

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // Parses incoming JSON requests

// Simple route for health check
app.get('/', (req, res) => {
    res.send('Displacement Housing API is running');
});



// Sync the database and start the server
db.sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });
