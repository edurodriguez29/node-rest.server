require('./config/config');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;

    console.log('base de datos Online');
});

app.listen(process.env.PORT, () => {
    console.log(`escuchando en el puerto ${process.env.PORT}`);
})