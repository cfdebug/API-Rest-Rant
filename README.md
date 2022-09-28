# Project REST-Rant

### REST-Rant is an app where users can review restaurants.

## Routes
| Method | Path | Purpose |
|---|---|---|
| GET | / | Home Page |
| GET | /places | Places Index Page |
| POST | /places | Create New Place |
| GET | /places/new | Form Page For Creating A New Place |
| GET | /places/:id | Details About A Particular Place |
| PUT | /places/:id | Update A Particular Place |
| GET | /places/:id/edit | Form Page For Editing An Existing Place |
| DELETE | /places/:id | Delete A Particular Place |
| POST | /places/:id/rant | Create A Rant (Comment) About A Particular Place |
| DELETE | /places/:id/rant/:rantId | Delete A Rant (Comment) About A Particular Place |
| GET | * | 404 Page (Matches Any Route Not Defined Above) |

## Database

**places**
| Field | Type |
|---|---|
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |
