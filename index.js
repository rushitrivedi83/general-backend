import express from 'express'; 
import mongoose from 'mongoose' // Setting up mongoose MongoDB.
import cors from 'cors'; // Setting up CORS for local developemnt.
import dotenv from 'dotenv' // Access to ENV variables
import passport from 'passport';
import session from 'express-session';


import projectRoutes from './routes/projects.js';
import userRoutes from './routes/users.js';
import taskRoutes from './routes/tasks.js';
import experienceRoutes from './routes/experiences.js'

var app = express(); // Init Express as "app"
dotenv.config();

// Parses any request body as a JSON by default.
app.use(express.json());

// Sets corrects headers on the response so we can use CORS on localhost. (Probably not needed in Production.)
app.use(cors({credentials: true, origin: true}));
 
 // Connect to the DB.
mongoose.connect( process.env.CONNECTION_URL , { useNewUrlParser: true, useUnifiedTopology: true} )
	.then(() => 
		app.listen((process.env.PORT || 5003), () => console.log('Server running on port: ', (process.env.PORT || 5003))))
	.catch((error) => console.log(error.message));


//passport
app.use(session( { 
	name: 'myname.id',
	resave: false,
	saveUninitialized: false,
	secret:'secret',
	cookie: {
		maxAge: 36000000,
		httpOnly: false,
		secure: false
	} 
}));

import './passport-config.js';

app.use(passport.initialize());
app.use(passport.session());

app.use("/users/tasks", taskRoutes);
app.use('/projects', projectRoutes);
app.use('/users', userRoutes);
app.use('/experiences', experienceRoutes);

app.get('/', (req, res) => {
	res.send('General Backend is up!')
 });