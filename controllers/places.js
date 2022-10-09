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
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
  // if (!req.body.pic) {
  //   req.body.pic = 'http://placekitten.com/400/400'
  // }
  // if (!req.body.city) {
  //   req.body.city = 'Anytown'
  // }
  // if (!req.body.state) {
  //   req.body.state = 'USA'
  // }
  // if (!req.body.founded) {
  //   req.body.founded = 'Date Unknown'
  // }
  // places.push(req.body)
  // res.redirect('/places')
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
  // let id = Number(req.params.id)
  // if (isNaN(id)) {
  //   res.render('error404')
  // }
  // else if (!places[id]) {
  //   res.render('error404')
  // }
  // else {
  //   res.render('places/show', {place: places[id], id})
  // }
})

// EDIT
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/edit', {place: places[id], id})
  }
})

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  console.log(id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
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
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})

// DELETE
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})



// Export
module.exports = router
