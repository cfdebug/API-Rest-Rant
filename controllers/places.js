// Places Router
const router = require('express').Router()

// Route
router.get('/', (req, res) => {
    res.send('GET /places')
})

// Export
module.exports = router
