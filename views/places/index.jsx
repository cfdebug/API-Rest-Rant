const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place, index) => {
      return (
        <div className="col-sm-6">
          <h2 className='text-primary'><a href={`/places/${index}`}>{place.name}</a></h2>
          <p>
            {place.cuisines}
          </p>
          <img className='home-img' src={place.pic} alt={place.name}/>
          <p>
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1 className='text-primary'>Places to Rant or Rave About</h1>
              <div className='row'>
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }  

module.exports = index