// Places Router
const router = require('express').Router()
const db = require('../models')

// ROUTE
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    res.render('error404')
  })
})

// ADD
router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  if (!req.body.founded) {
    req.body.founded = 'Date Unknown'
  }

  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// NEW FORM
router.get('/new', (req, res) => {
  res.render('places/new')
})

// SHOW
router.get('/:id', (req, res) => {
db.Place.findById(req.params.id)
.then(place => {
  res.render('places/show', {place})
})
.catch(err => {
  console.log('err', err)
  res.render('error404')
})
})

// EDIT
router.get('/:id/edit', (req, res) => {
  console.log(req.params.id)
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/edit', {place})
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  if (!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'
      }
    if (!req.body.city) {
        req.body.city = 'Anytown'
      }
      if (!req.body.state) {
        req.body.state = 'USA'
      }
        if (!req.body.founded) {
          req.body.founded = 'Date Unknown'
        }
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// DELETE
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})



// Export
module.exports = router
