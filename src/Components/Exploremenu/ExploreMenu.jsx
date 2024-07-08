import React from 'react'
import './ExploreMenu.css'
import { assets, menu_list } from '../Assets/assets'
import { Link } from 'react-router-dom'
const ExploreMenu = () => {

  return (
      <div className='exploreMenu' id='exploreMenu'>
          <div className="exploreMenuList">
              {menu_list.map((item, index) => {
                  return (
                      <div key={index} className="exploreMenuListItem">
                          <div className="menuDescription">
                              <img src={item.menu_image} alt="menu" />
                              <div className="menuLine"></div>
                            <p>{item.menu_name}</p>
                          </div>
                          <div className="menuPrice">
                              <p>{item.menu_price}</p>
                              <div className="cart">
                                  <Link to='/cart'>
                                  <img src={assets.cart} alt="cart" />
                                  </Link>
                                
                              </div>
                          </div>
                         
                      </div>
                  )
              }
              )}
          </div>
      </div>
  )
}

export default ExploreMenu