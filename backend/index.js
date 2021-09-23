import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Local Imports
import usersRoute from './routes/users.js';
import postsRoute from './routes/posts.js';

// Initializing The Application
const app = express();
// Importing The .env File Content
dotenv.config();

// Middlewares
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Routes For Each Service
app.use('/users', usersRoute);
app.use('/posts', postsRoute);

// just for development purposes
app.get('/', (req, res) => {
    res.send("<h1>Server working!</h1>");
})

const CONNECTION_URI = process.env.CONNECTION_URI;
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err));
mongoose.set('useFindAndModify', false);