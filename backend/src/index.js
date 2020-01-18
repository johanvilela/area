const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// MogoDB Local
// let mongoDB = 'mongodb://127.0.0.1/my_database';

// MogoDB Atlas
let mongoDB = 'mongodb+srv://johanvilela:1594815926@cluster0-wmkd0.mongodb.net/week10?retryWrites=true&w=majority';

mongoose.set('useCreateIndex', true);
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);