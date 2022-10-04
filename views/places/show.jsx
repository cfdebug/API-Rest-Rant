const React = require('react')
const Def = require('../default')

function show (data) {
    return (
    <Def>
       <main>
       <div className="row">
              <div className="col-sm-6">
                <img className = 'home-img' src={data.place.pic} alt={data.place.name} />
                <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
              </div>
              <div className="col-sm-6">
                <h1 className='text-primary'>{ data.place.name }</h1>
                <h2>Rating: Currently Unrated</h2>
                </div>
                <hr />
                <h2>Comments</h2>
                <h5>
                    No Comments Yet!
                </h5>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>  
                <form method='POST' action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>     
        </div>
        </main> 
    </Def>
    )
}

module.exports = show