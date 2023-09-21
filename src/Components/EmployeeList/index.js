import React ,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getEmployeeDetails } from "../../Services/FoodListApi"

const EmployeeList =() =>{
const dispatch = useDispatch();
const {employeeList} = useSelector(state => state.employeeListDetails)

useEffect(() => {
    dispatch(getEmployeeDetails())
}, [dispatch])

console.log(employeeList)
return(
    <table>
        <thead>
            <tr>
            <th>NAME</th>
            <th>ZIP</th>
            <th>AGE</th>
            <th>PAY</th>
            <th>DEPARTMENTID</th>
            <th>GETTAXFORM</th>
            </tr>
        </thead>
        <tbody>
        {employeeList.map((items,id) => (<tr key={id}>
                    <td>{items.Name}</td>
                    <td>{items.Zip}</td>
                    <td>{items.Age}</td>
                    <td>{items.Pay}</td>
                    <td>{items.DepartmentId}</td>
                    <td>{items.GetTaxForm}</td>
                </tr>))}
        </tbody>
    </table>
);
}



export default EmployeeList;