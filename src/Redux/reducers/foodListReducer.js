import * as Types from '../actions/type'

const initialState = {
    loading: false,
    foodItems: [],
    error: null
}

const foodList = (state = initialState, action) => {
    switch (action.type) {
        case Types.INITIAL_LOAD:
            return { ...state, loading: action.payload }
        case Types.GET_FOODLIST_SUCCESS:
            return { ...state, foodItems: action.payload }
        case Types.GET_FOODLIST_FAILURE:
            return { ...state, error: action.payload.error }
        default:
            return state
    }
}

export default foodList