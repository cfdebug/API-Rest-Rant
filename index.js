// Required Modules/Configuration
require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

// Routes
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// Start Listening/Open the Doors
app.listen(process.env.PORT)

