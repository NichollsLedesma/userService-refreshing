const express = require('express');
const { port } = require('./config')
const app = express()
require('./config/database')
app.use(express.json())

app.use('/api/v1', require('./routes/v1'))

app.listen(port, () => console.log(`Listening on port ${port}`))