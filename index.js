// Required Modules/Configuration
require('dotenv').config()
const express = require('express')
const app = express()

// JSX Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

// Controllers
app.use('/places', require('./controllers/places'))

// Routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})

// Start Listening/Open the Doors
app.listen(process.env.PORT)

