import React, { useContext } from "react";
import "./Cart.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { assets, menu_list_row } from "../../Components/Assets/assets";
import ExploreMenuRow from "../../Components/ExploreMenuRow/ExploreMenuRow";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cartPage">
      <Navbar />
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-img">
            <img src={assets.menu1} alt="" />
          </div>
          <div className="cart-items-text">
            <h2>PRODUCT INFO</h2>
            <p>
              THIS IS INFORMATION ABOUT THE PRODUCT AND INFORMATION ABOUT
              NUTRION AND FACTS{" "}
            </p>
          </div>
          <div className="cart-info">
            <h1 className="cart-title">GRILLED CHICKEN</h1>
            <div className="qty-box">
              <p className="qty">12,000</p>
              <div className="qty-add">
                <div className="qtyimg minus">
                  <img src={assets.minus} alt="minus" />
                </div>
                <p className="qty-amt">1</p>
                <div className="qtyimg">
                  <img src={assets.plus} alt="" className="plus" />
                </div>
              </div>
            </div>
            <div className="price-box">
              <p>
                TOTAL PRICE <span className="price">N12,000</span>
              </p>
              <Link to="/placeOrder">
                <button>Place Order</button>
              </Link>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <ExploreMenuRow title={"YOU MAY LIKE"} />
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
