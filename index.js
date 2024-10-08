const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models'); // Sequelize models, automatically loaded from models/index.js
import displacementRequestRoutes from './routes/DisplacementRequestRoutes';
import userRoutes from './routes/UserRoutes';
import housingOfferRoutes from './routes/HousingOfferRoutes';
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(bodyParser.json()); // Parses incoming JSON requests

//api
app.use('/api/displacementrequests', displacementRequestRoutes);
app.use('/api/users', userRoutes);
app.use('/api/housingoffers', housingOfferRoutes);


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
