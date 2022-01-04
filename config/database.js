const mongoose = require('mongoose');
const { mongodb: { name, host, port } } = require('./index')
const customOptions = { useNewUrlParser: true }

mongoose.connect(`mongodb://${host}:${port}/${name}`, customOptions)
    .then(db => console.log('Connected mongodb'))
    .catch(err => console.log('Error al conectar', err));

module.exports = mongoose;