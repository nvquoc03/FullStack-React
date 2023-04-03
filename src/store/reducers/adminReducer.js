import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    position: []

}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log('check fire fetch gender start', action)
            return {
                ...state,
            }

        case actionTypes.FETCH_GENGER_SUCCESS:
            let copyState = { ...state }
            copyState.genders = action.data
            console.log('check fire fetch gender success', copyState)
            return {
                ...copyState,
            }

        case actionTypes.FETCH_GENDER_FAILED:
            console.log('check fire fetch gender failed', action)
            return {
                ...state,
            }

        default:
            return state;
    }
}

export default adminReducer;