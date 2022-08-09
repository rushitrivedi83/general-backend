import express from 'express'; 
import mongoose from 'mongoose' // Setting up mongoose MongoDB.
import cors from 'cors'; // Setting up CORS for local developemnt.
import dotenv from 'dotenv' // Access to ENV variables

import projectRoutes from './routes/projects.js';

const app = express(); // Init Express as "app"
dotenv.config();

// Parses any request body as a JSON by default.
app.use(express.json());

// Sets corrects headers on the response so we can use CORS on localhost. (Probably not needed in Production.)
app.use(cors());

app.use('/projects', projectRoutes);

app.get('/', (req, res) => {
	res.send('General Backend is up!')
 });
 
 // Connect to the DB.
mongoose.connect( process.env.CONNECTION_URL , { useNewUrlParser: true, useUnifiedTopology: true} )
	.then(() => 
		app.listen((process.env.PORT || 5003), () => console.log('Server running on port: ', (process.env.PORT || 5003))))
	.catch((error) => console.log(error.message));