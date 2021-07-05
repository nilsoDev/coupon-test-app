//Import Modules
import React from 'react';
import {useState} from 'react';
import Axios from 'axios';

//Coupon Component
const Coupon = ({val}) =>{
    
  const [isActive, setActive] = useState(false);
  const [hide, setHide] = useState(false);
  
  //Add Class to show Coupon Code in the UI
  const handleToggle = () => {
    setActive(!isActive);
  };

  //Add Class to show Hide the Button in the UI
  const hideButton = () => {
    setHide(true);
  };
  
  //Use Coupon and delete it in the DB if you can´t use it more than once
  const cashCoupon = (id) =>{
      handleToggle();
      hideButton();
      if(val.multipleTimes == false){
        Axios.delete(`http://localhost:3001/delete/${id}`);
      } else {
        Axios.put(`http://localhost:3001/countAdd/${id}`);
      }
  }

  return(
      <div className="couponBox">
          <h3 className="shopName">{val.shopName}</h3>
          <div className="infoBox">
            <p className="couponValue">{val.couponValue}</p>
            <p className="category">{val.description}</p>
          </div>
          <button className={`redeemButton ${hide ? "hide" : ""}`} onClick={()=>{cashCoupon(val._id)}}>Einlösen</button>
          <p className={`couponCode ${isActive ? "show" : ""}`}>{val.couponCode}</p>
      </div>
    );
}

export default Coupon; //Export Component