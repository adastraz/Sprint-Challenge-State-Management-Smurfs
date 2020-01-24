import axios from 'axios'
export const FETCHING_ACTIVITY_START = 'FETCHING_ACTIVITY_START';
export const FETCHING_ACTIVITY_SUCCESS = 'FETCHING_ACTIVITY_SUCCESS';
export const FETCHING_ACTIVITY_FAILURE = 'FETCHING_ACTIVITY_FAILURE';
export const NEW_SMURF = 'NEW_SMURF'

export const fetchSmurf = () => dispatch => {
    dispatch({ type: FETCHING_ACTIVITY_START })
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_ACTIVITY_SUCCESS,
                payload: res.data})
        })
        .catch(err => {
            dispatch ({ type: FETCHING_ACTIVITY_FAILURE, 
                payload: err.response})
        })
}

export const smurfyNew = (thing) => dispatch => {
    dispatch ({ type: NEW_SMURF })
        axios.post('http://localhost:3333/smurfs', thing)
            .then(res => console.log(res))
            .catch(err => console.log(err))
}