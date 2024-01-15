// Call required libraries
import {config} from 'dotenv';

// Configure dotenv
config();

// Export config object with all environment variables
export default {
    server: process.env.Server || '',
    database: process.env.DataBase || '',
    user: process.env.User || '',
    password: process.env.Password || ''
};
