// Places Router
const router = require('express').Router()

// Route
router.get('/', (req, res) => {
    let places = [{
        name: 'Al Dente',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Italian',
        pic: '/images/Restaurant_1.jpg'
      }, {
        name: 'Above the Horizon',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Steak, Seafood',
        pic: '/images/Restaurant_2.jpg'
      }]
      
    res.render('places/index', {places})
})

// Export
module.exports = router
