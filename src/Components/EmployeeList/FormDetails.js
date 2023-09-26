import React, {useState} from "react";
import "../../App.css";



const FormDetails = ({handleSubmit}) => {
    const [inputs, setInputs] = useState({});

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((details) => ({
        ...details, [name]: value
    }))
}

const handleSubmitForm = (event) =>{
    event.preventDefault();
    handleSubmit(inputs)
    setInputs('')
}
    return (
        <form className ="formAlign" onSubmit={(e) => handleSubmitForm(e)}>
            <div>
            <label>NAME:</label>
            <input
                type="text"
                name="Name"
                placeholder="FirstName"
                value={inputs.name}
                onChange={(e) => handleChange(e)} />
            </div>
            <div>
            <label>ZIP:</label>
            <input
                type="number"
                name="Zip"
                placeholder="zip"
                value={inputs.zip}
                onChange={(e) => handleChange(e)} />
            </div>
            <div>
            <label>AGE:</label>
            <input
                type="number"
                name="Age"
                placeholder="age"
                value={inputs.age}
                onChange={(e) => handleChange(e)} />
            </div>
            <div>
            <label>PAY:</label>
            <input
                type="number"
                name="Pay"
                placeholder="pay"
                value={inputs.pay}
                onChange={(e) => handleChange(e)} />
            </div>
            <div>
            <label>DEPARTMENT ID:</label>
            <input
                type="number"
                name="DepartmentId"
                placeholder="department id"
                value={inputs.departmentId}
                onChange={(e) => handleChange(e)} />
            </div>
            <div>
            <label>GET FORM ID:</label>
            <input
                type="text"
                name="GetTaxForm"
                placeholder="Get Tax Form"
                value={inputs.getTaxForm}
                onChange={(e) => handleChange(e)} />
            </div>
            
            <button type="submit">SUBMIT</button>
        </form>
    );
}

export default FormDetails;