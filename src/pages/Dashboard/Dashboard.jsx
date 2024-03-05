import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
// import Card from "../../components/card/Cards";
import { useDispatch, useSelector } from "react-redux";

import { fetchDishes } from "../../Redux/Features/cardslice";
import Button from "../../components/button/Button";
import "./dashboard.scss";
import Card from "../../components/card/Cards";

function Dashboard() {
  const [currentCat, setCurrentCat] = useState(undefined);
  // api =https://run.mocky.io/v3/db0018c8-5982-4d89-a54f-f51fe14d3c89
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchDishes());
  }, []);
  //selecting required data from redux store(state)
  const { categories, dishes, restaurant } = useSelector((state) => state.Data);
  useEffect(() => {
    categories?.length && setCurrentCat(categories[0]?.menu_category_id);
  }, [categories]);

  return (
    <>
      <div className="row p-0 m-0">
        <NavBar  
        restName={restaurant?.name}
        />
        <div className="category_bar">
          {categories?.map((cat) => {
            return (
              <div
                onClick={() => setCurrentCat(cat?.menu_category_id)}
                key={cat?.menu_category_id}
                className={`category_bar_item ${
                  cat?.menu_category_id === currentCat ? "selected" : ""
                }`}
              >
                {cat?.menu_category}
              </div>
            );
          })}
        </div>
        
        {dishes[currentCat]?.map((itm, indx) => {
          console.log("all dishes in restoo", itm);
          return (
            <>
            <Card
            key={itm?.dish_id}
            restodishname={itm?.dish_name}
            restodishcurrency={itm?.dish_currency}
            restodishprice={itm?.dish_price}
            restodishdescription={itm?.dish_description}
            restodishcalories={itm?.dish_calories}
            restodishimage={itm?.dish_image}
            // childbutton={
            // <>
            //   <div className="col-xl-4 col-md-5 col-sm-12">
              
            //   <Button btnType="save" 
            //   minusOnClick={()=>{
            //     setCount(count-1)
            //   }}
            //   plusOnClick={()=>{
            //     setCount(count+1)
            //   }}
            //   >{count} </Button>
            // </div>

            // </>
            // }
            
            
            />
              {/* <div
                className="d-flex justify-content-between py-2 border_bottom_dishes px-2"
                style={{ backgroundColor: "black", color: "white" }}
              >
                <div key={itm?.dish_id}>
                  <h4>{itm?.dish_name} </h4>
                  <span>
                    {" "}
                    <span>{itm?.dish_currency} </span> {itm?.dish_price}{" "}
                  </span>
                  <p>{itm?.dish_description}</p>
                  <div className="row">
                    <div className="col-xl-4 col-md-5 col-sm-12">
                      <Button btnType="save"> </Button>
                    </div>
                  </div>
                </div>
                <div>
                  <span>{itm?.dish_calories} &nbsp;Calories </span>
                  <img
                    className="img_border_height"
                    src={itm?.dish_image}
                    // height={170}
                    // width={250}
                    alt=""
                  />
                </div>
              </div> */}
            </>
          );
        })}{" "}
        {/*
                </>
              );
            })}
        </div> */}
      </div>
    </>
  );
}
export default Dashboard;
