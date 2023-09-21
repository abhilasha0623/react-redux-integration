import * as Types from "./type";


const employeeListInitialLoad =(flag) =>{
    return{
        type:Types.INITIAL_LOAD,
        payload:flag
    }
}

const employeeListSuccess =(data)=> {
return{
    type: Types.GET_EMPLOYEELIST_SUCCESS,
    payload :data
}
}


const employeeListFailure =(error)=> {
    return{
        type: Types.GET_EMPLOYEELIST_FAILURE,
        payload: {
            error: 'Sorry some issue in Response please contact Administrator.'
        }
    }
    }

    export {employeeListInitialLoad,employeeListFailure,employeeListSuccess}