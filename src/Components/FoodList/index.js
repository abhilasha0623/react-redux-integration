import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getFoodList } from "../../Services/FoodListApi";
import MenuCard from "../MenuCard/MenuCard";



const FoodList = () => {
    const { foodItems } = useSelector(state => state.foodList)
    const [filteredMenu, setFilteredMenu] = useState(foodItems)
    console.log(filteredMenu)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFoodList())
    }, [dispatch])

    useEffect(() => { setFilteredMenu(foodItems) }, [foodItems])

    const fiterredFoodItem = (item) => {
        if (item === "ALL") {
            setFilteredMenu(foodItems)
        } else {
            const filterValue = foodItems.filter((category) => category.category === item)
            setFilteredMenu(filterValue)
        }
    }
    return (
        // <table style={{ width: 500 }}>
        //     <thead>
        //         <tr>
        //             <th>NAME</th>
        //             <th>TYPE</th>
        //             <th>PRICE</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {foodItems.map((items) => (<tr>
        //             <td>{items.Name}</td>
        //             <td>{items.Type}</td>
        //             <td>{items.Price}</td>
        //         </tr>))}
        //     </tbody>
        // </table>
        <>
            <div className="category">
                <button onClick={() => fiterredFoodItem("ALL")} className="btn-container">ALL</button>
                <button onClick={() => fiterredFoodItem("breakfast")} className="btn-container">BREAKFAST</button>
                <button onClick={() => fiterredFoodItem("lunch")} className="btn-container">LUNCH</button>
                <button onClick={() => fiterredFoodItem("dinner")} className="btn-container">DINNER</button>
            </div>
            <div className="card-section">
                {filteredMenu.map((item, index) =>
                    <MenuCard key={index} item={item} />
                )}
            </div>
        </>
    );
}


export default FoodList;