import React from "react";
import "./FoodList.css";
import { food_list } from "../Assets/assets";

const FoodList = ({ category, setCategory }) => {
  return (
    <div className="foodList" id="foodList">
      <div className="foodList">
        {food_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="foodMenuListItem"
            >
              <div className="menuDescription">
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt="menu"
                />
                <p className={category === item.menu_name ? "active" : ""}>
                  {item.menu_name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodList;
