const React = require('react')
const Def = require('../default')

function new_form (data) {
	let message = ''
	if (data.message) {
		message = (
			<h4 className='alert-danger'>
				{data.message}
			</h4>
		)
	}
    return(
    <Def>
       <main>
            <h1 className='text-primary'>
                Add A New Place
            </h1>
			{message}
            <form method="POST" action="/places">
			<div className='row'>
                <div className='form-group col-sm-6'>
                    <label htmlFor="name">Place Name</label>
                    <input className='form-control' id='name' name='name' type="text" required />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="pic">Place Picture</label>
                    <input className='form-control' id='pic' name='pic' type="text" />
                </div>
			</div>
			<div className='row'>
                <div className='form-group col-sm-6'>
                    <label htmlFor="city">City</label>
                    <input className='form-control' id='city' name='city' type="text" />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="state">State</label>
                    <select className='form-control' id='state' name='state'>
                        <option disabled selected value> -- select an option -- </option>
                        <option value="AL">Alabama</option>
	                    <option value="AK">Alaska</option>
	                    <option value="AZ">Arizona</option>
	                    <option value="AR">Arkansas</option>
	                    <option value="CA">California</option>
	                    <option value="CO">Colorado</option>
	                    <option value="CT">Connecticut</option>
	                    <option value="DE">Delaware</option>
	                    <option value="DC">District Of Columbia</option>
	                    <option value="FL">Florida</option>
	                    <option value="GA">Georgia</option>
	                    <option value="HI">Hawaii</option>
	                    <option value="ID">Idaho</option>
	                    <option value="IL">Illinois</option>
	                    <option value="IN">Indiana</option>
	                    <option value="IA">Iowa</option>
	                    <option value="KS">Kansas</option>
	                    <option value="KY">Kentucky</option>
	                    <option value="LA">Louisiana</option>
	                    <option value="ME">Maine</option>
	                    <option value="MD">Maryland</option>
	                    <option value="MA">Massachusetts</option>
	                    <option value="MI">Michigan</option>
	                    <option value="MN">Minnesota</option>
	                    <option value="MS">Mississippi</option>
	                    <option value="MO">Missouri</option>
	                    <option value="MT">Montana</option>
	                    <option value="NE">Nebraska</option>
	                    <option value="NV">Nevada</option>
	                    <option value="NH">New Hampshire</option>
	                    <option value="NJ">New Jersey</option>
	                    <option value="NM">New Mexico</option>
	                    <option value="NY">New York</option>
	                    <option value="NC">North Carolina</option>
	                    <option value="ND">North Dakota</option>
	                    <option value="OH">Ohio</option>
	                    <option value="OK">Oklahoma</option>
	                    <option value="OR">Oregon</option>
	                    <option value="PA">Pennsylvania</option>
	                    <option value="RI">Rhode Island</option>
	                    <option value="SC">South Carolina</option>
	                    <option value="SD">South Dakota</option>
	                    <option value="TN">Tennessee</option>
	                    <option value="TX">Texas</option>
	                    <option value="UT">Utah</option>
	                    <option value="VT">Vermont</option>
	                    <option value="VA">Virginia</option>
	                    <option value="WA">Washington</option>
	                    <option value="WV">West Virginia</option>
	                    <option value="WI">Wisconsin</option>
	                    <option value="WY">Wyoming</option>
                    </select>
                </div>
				</div>
				<div className='row'>
                <div className='form-group col-sm-6'>
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className='form-control' id='cuisines' name='cuisines' type="text" required />
                </div>
				<div className='form-group col-sm-6'>
                    <label htmlFor="founded">Established</label>
                    <input className='form-control' id='founded' name='founded' type="text" defaultValue={new Date().getFullYear()}/>
                </div>
				</div>
                <input className='btn btn-primary' type="submit" value="Add Place" />
            </form>
        </main> 
    </Def>
)
}

module.exports = new_form