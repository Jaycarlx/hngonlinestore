import React from "react";
import "./PlaceOrder.css";
import { assets } from "../../Components/Assets/assets";
import Navbar from "../../Components/Navbar/Navbar";

const PlaceOrder = () => {
  return (
    <>
      <Navbar />
      <div className="place-orderPage">
        <div className="place-order-card">
          <div className="place-order-summary">
            <h1>ORDER SUMMARY</h1>
            <div className="place-order-summary-item">
              <div className="order-img">
                <img src={assets.menu3} alt="" />
              </div>
              <h2 className="burger">Burger</h2>
              <div className="order-price-icon">
                <div className="qtyimg minus">
                  <img src={assets.minus} alt="minus" />
                </div>
                <p className="qty-amt">1</p>
                <div className="qtyimg">
                  <img src={assets.plus} alt="" className="plus" />
                </div>
              </div>
              <div className="order-price">
                <p>12,000</p>
                <img src={assets.bin} alt="" />
              </div>
            </div>
            <div className="place-order-summary-item">
              <div className="order-img">
                <img src={assets.menu2} alt="" />
              </div>
              <h2>Pizza</h2>
              <div className="order-price-icon">
                <div className="qtyimg minus">
                  <img src={assets.minus} alt="minus" />
                </div>
                <p className="qty-amt">1</p>
                <div className="qtyimg">
                  <img src={assets.plus} alt="" className="plus" />
                </div>
              </div>
              <div className="order-price">
                <p>12,000</p>
                <img src={assets.bin} alt="" />
              </div>
            </div>
            <div className="place-order-summary-item">
              <div className="order-img">
                <img src={assets.menu4} alt="" />
              </div>
              <h2>Wrap</h2>
              <div className="order-price-icon">
                <div className="qtyimg minus">
                  <img src={assets.minus} alt="minus" />
                </div>
                <p className="qty-amt">1</p>
                <div className="qtyimg">
                  <img src={assets.plus} alt="" className="plus" />
                </div>
              </div>
              <div className="order-price">
                <p>12,000</p>
                <img src={assets.bin} alt="" />
              </div>
            </div>
            <hr></hr>
            <div className="priceSummary">
              <div className="priceDelivery">
                <div>
                  <p className="priceHeading">SUB TOTAL</p>
                  <p>DELIVERY</p>
                </div>
                <div>
                  <p className="priceAmt">48,000</p>
                  <p>8,000</p>
                </div>
              </div>
              <div className="priceTotal">
                <p>TOTAL</p>
                <p>56,000</p>
              </div>
            </div>
          </div>
          <div className="payment-card">
            <img src={assets.card} alt="" className="paycard" />
            <div className="payment-field">
              <h2>CARD NAME</h2>
              <hr></hr>
              <h2>CARD NUMBER</h2>
              <hr></hr>
              <div className="expiry">
                <h2>EXPIRY DATE </h2>
                <h2> CVV</h2>
              </div>

              <hr></hr>
            </div>
            <button>MAKE PAYMENT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
