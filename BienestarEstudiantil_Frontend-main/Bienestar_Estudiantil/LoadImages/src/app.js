// Init: npm run dev
import express from 'express';
import morgan from 'morgan';

//Initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3001);

//Routes import
import rout_zodiac from "./routes/rout_zodiaco";

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes use
app.use('/zodiac', rout_zodiac);
export default app;
