import React ,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getEmployeeDetails , postEmployeeDetails} from "../../Services/FoodListApi"
import FormDetails from "./FormDetails";
import { v4 as uuid } from 'uuid';

const EmployeeList =() =>{
const dispatch = useDispatch();
const {employeeList} = useSelector(state => state.employeeListDetails)



const handleSubmit = (input) =>{
    const uniqueId = uuid();
    const data ={
        id :uniqueId,
        ...input
    }
    dispatch(postEmployeeDetails(data))
    console.log(data)
   
}

useEffect(() => {
    dispatch(getEmployeeDetails())
}, [dispatch])

console.log(employeeList)
return(
    <>
     <FormDetails handleSubmit={handleSubmit} />
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
    </>
   
);
}



export default EmployeeList;