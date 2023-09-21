import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getFoodList } from "../../Services/FoodListApi"


const FoodList = () => {
    const { foodItems } = useSelector(state => state.foodList)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFoodList())
    }, [dispatch])

  console.log(foodItems)
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