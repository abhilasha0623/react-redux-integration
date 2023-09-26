import ApiBaseURL from './apiConfig';
import { foodListSuccess, foodListFailure, foodListInitialLoad } from "../Redux/actions/foodListAction";
import { employeeListSuccess, employeeListFailure, employeeListInitialLoad } from "../Redux/actions/employeeListAction"

const getFoodList = () => {
    return dispatch => {
        dispatch(foodListInitialLoad(true));
        fetch(`${ApiBaseURL}/foodMenu`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
        }).then(res => res.json())
            .then(data => {
                dispatch(foodListSuccess(data));
                dispatch(foodListInitialLoad(false));
            })
            .catch(err => {
                dispatch(foodListFailure(err));
                dispatch(foodListInitialLoad(false));
            });
    };
}

const getEmployeeDetails = () => {
    return dispatch => {
        dispatch(employeeListInitialLoad(true))
        fetch(`${ApiBaseURL}/employeeDetails`, {
            method: "GET"
        })
            .then(res => res.json())
            .then((data) => {
                dispatch(employeeListSuccess(data))
                dispatch(employeeListInitialLoad(false))
            })
            .catch((err) => {
                dispatch(employeeListFailure(err))
                dispatch(employeeListInitialLoad(false))
            })
    }
}
      
const postEmployeeDetails = (input) => {
    return dispatch => {
        dispatch(employeeListInitialLoad(true))
        fetch(`${ApiBaseURL}/employeeDetails`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        })
            .then(res => res.json())
            .then((data) => {
                dispatch(employeeListSuccess(data))
                dispatch(employeeListInitialLoad(false))
            })
            .catch((err) => {
                dispatch(employeeListFailure(err))
                dispatch(employeeListInitialLoad(false))
            })
    }
}
export { getFoodList, getEmployeeDetails, postEmployeeDetails };