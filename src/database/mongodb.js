const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/entrevista', (err) => {
    if (err) console.log('Error', err)
    else console.log('Mongoose Conectado no mongoDB : ) ')
});