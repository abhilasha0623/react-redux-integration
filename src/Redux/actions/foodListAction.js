import * as Types from './type'

const foodListInitialLoad = flag =>({
    type: Types.INITIAL_LOAD,
    payload: flag
})

const foodListSuccess = data => ({
    type: Types.GET_FOODLIST_SUCCESS,
    payload: data
});

const foodListFailure = error => ({
    type: Types.GET_FOODLIST_FAILURE,
    payload: {
        error: 'Sorry some issue in Response please contact Administrator.'
    }
});

export { foodListSuccess, foodListFailure, foodListInitialLoad }