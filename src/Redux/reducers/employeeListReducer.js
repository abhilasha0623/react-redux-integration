import * as Types from "../actions/type";

const intialState = {
    loading: false,
    employeeList: [],
    error: null
}

const employeeListDetails = (state=intialState,action)  =>{
    switch(action.type){
        case Types.INITIAL_LOAD :
            return{...state , loading:action.payload}
        case Types.GET_EMPLOYEELIST_SUCCESS :
            return {...state , employeeList: action.payload}
        case Types.GET_EMPLOYEELIST_FAILURE:
            return{...state , error:action.payload}
        default:
            return state

    }

}

export {employeeListDetails}