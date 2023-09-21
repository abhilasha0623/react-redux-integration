import { combineReducers } from 'redux';
import counter from './counterReducer';
import foodList from './foodListReducer';
import {employeeListDetails} from "./employeeListReducer";

const rootReducer = combineReducers({
    counter,
    foodList,
    employeeListDetails,
})

export default rootReducer