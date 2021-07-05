//Import Modules
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
//Import Stylesheets
import './App.css';
//Import Components
import Form from './Components/Form';
import CouponList from './Components/CouponList';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {

  //State Hooks
  const [shopName, setShopName] = useState('');
  const [couponValue, setCouponValue] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [description, setDescription] = useState('');
  const [multipleTimes, setMultipleTimes] = useState(false);
  const [couponList, setCouponList] = useState([]);
  const [isActive, setActive] = useState(false);
  
  //Show and Hide the Form
  const handleToggle = () => {
    let toggle = document.getElementById("formToggler");
    if(toggle.style.transform=='rotate(45deg)'){
      toggle.style.transform='rotate(0deg)';
    } else {
      toggle.style.transform='rotate(45deg)'
    } 
    setActive(!isActive);
  };

  //Effect Hook
  useEffect(()=>{ 
    Axios.get("http://localhost:3001/read").then((response)=>{ //Send request to route in backend
    setCouponList(response.data); //Handle data from the response
    });
  },[]); //Start useEffect Hook as soon as page loads

  return (
    <div className="App">
      <Header isActive={isActive}/>
      <Form isActive={isActive}
      shopName={shopName} setShopName={setShopName} couponCode={couponCode} setCouponCode={setCouponCode}
      description={description} setDescription={setDescription} multipleTimes={multipleTimes} setMultipleTimes={setMultipleTimes}
      couponList={couponList} setCouponList={setCouponList} couponValue={couponValue} setCouponValue={setCouponValue}
      />
      <CouponList isActive={isActive} couponList={couponList} setCouponList={setCouponList}/>
      <button className="openFormButton" id="formToggler" onClick={handleToggle}>+</button>
      <Footer isActive={isActive} />
    </div>
  );
}

export default App;
