import {
    FETCHING_ACTIVITY_START,
    FETCHING_ACTIVITY_SUCCESS,
    FETCHING_ACTIVITY_FAILURE,
    NEW_SMURF
  } from '../actions'

const initialState = {
    isLoading: false,
    smurf:[]
}

export const reducer = (state= initialState, action) => {
    switch(action.type){
        case FETCHING_ACTIVITY_START:
            return{
                ...state,
                isLoading: true
            }
        case FETCHING_ACTIVITY_SUCCESS: 
            return{
                ...state,
                isLoading: false,
                smurf: action.payload
            }
        case FETCHING_ACTIVITY_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        case NEW_SMURF: 
            return{
                ...state
            }
        default:
            return state
    }
}