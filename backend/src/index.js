const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// MogoDB Local
let mongoDB = 'mongodb://127.0.0.1/my_database';

// MogoDB Atlas
// let mongoDB = 'mongodb+srv://omnistack:omnistack@cluster0-wmkd0.mongodb.net/week10?retryWrites=true&w=majority';

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);