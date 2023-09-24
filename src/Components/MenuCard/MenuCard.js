import React from "react"
import "../../App.css";



const MenuCard =({item}) =>{
return(
<section className="card-sector">
    <main>
           <div className ="title-food">{item.category}</div>
        <div className="menu-info">
        <div>{item.title}</div>
        <div>{item.desc}</div>
        <div>${item.price}</div>
        </div>
    </main>
</section>
    )
}


export default MenuCard;