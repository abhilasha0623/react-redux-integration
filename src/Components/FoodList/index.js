import React, { useState, useEffect } from "react";


const FoodList = () => {
    const [foodItems, setFoodItems] = useState([])

    useEffect(() => {
        getFoodDetails()
    }, [])

    const getFoodDetails = async () => {
        const response = await fetch("http://localhost:4000/foodList", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
        })
        const data = await response.json();
        setFoodItems(data)
    }


    return (
        <table style={{ width: 500 }}>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>TYPE</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>
                {foodItems.map((items) => (<tr>
                    <td>{items.Name}</td>
                    <td>{items.Type}</td>
                    <td>{items.Price}</td>
                </tr>))}
            </tbody>
        </table>

    );
}


export default FoodList;