
import dotenv from 'dotenv';
import app from './app.js';  
import db from './config/db.js';  
dotenv.config();

const port = process.env.PORT || 3000; 

db.connect()
    .then(() => {
        console.log('Connected to the database');
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err.stack);
    });
