import React from "react";
import "./ExploreMenuRow.css";
import { assets, menu_list_row } from "../Assets/assets";
import { Link } from "react-router-dom";

const ExploreMenuRow = ({ title }) => {
  return (
    <div className="exploreMenu" id="exploreMenu">
      <h1 className="all-products">{title}</h1>
      <div className="exploreMenuList">
        {menu_list_row.map((item, index) => {
          return (
            <div key={index} className="exploreMenuListItem">
              <div className="menuDescription">
                <img src={item.menu_image} alt="menu" />
                <div className="menuLine"></div>
                <p>{item.menu_name}</p>
              </div>
              <div className="menuPrice">
                <p>{item.menu_price}</p>
                <Link>
                  <div className="cart">
                    <img src={assets.cart} alt="" />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenuRow;
