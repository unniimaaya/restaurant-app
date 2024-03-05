import React, { useState } from "react";
// import DemoImg from "../../assets/dummy.jpeg"
import Button from "../button/Button";
import "./card.scss"

function Card({
  restodishcurrency,
  restodishname,
  restodishprice,
  restodishdescription,
  restodishcalories,
  restodishimage,
  // childbutton
}) 
{
  const [count,setCount]= useState(0)
  return (
    <>
      <div
        className="d-flex justify-content-between border_bottom_dishes px-2 py-2 width_card"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="width_card_section1">
          <h4>{restodishname} </h4>
          {/* <span>{restodishprice} </span> */}
          <span>
            <span>{restodishcurrency} </span> {restodishprice}{" "}
          </span>
          <p className="">{restodishdescription}</p>
          <div className="row">
            <div className="col-xl-4 col-md-5 col-sm-12">
            <Button btnType="save" 
            minusOnClick={()=>{
             setCount(count-1)
               }}
               plusOnClick={()=>{
                setCount(count+1)
               }}
             >{count} </Button>
           </div>
          </div>
        </div>
        <div className="width_card_section2">
          <span>{restodishcalories} &nbsp;Calories </span>
          <img className="img_border_height" src={restodishimage} alt="" />
        </div>
      </div>
    </>
  );
}
export default Card;
