//Import Modules
import React from 'react';
import Axios from 'axios';
import {useForm} from 'react-hook-form';

//Input Form Component
const Form = ({isActive, shopName, setShopName, couponCode, setCouponCode, description, setDescription, multipleTimes, setMultipleTimes, couponList, setCouponList, couponValue, setCouponValue}) =>{

   


    //Add Coupon to the Database in the backend
    const addToList = ()=>{  
        Axios.post("http://localhost:3001/add", //Send post request with JSON Object to the route in backend
        {shopName: shopName, couponCode: couponCode, description: description, multipleTimes: multipleTimes, couponValue: couponValue}).then((response)=>{
            setCouponList([...couponList, {_id: response.data._id, shopName: shopName, couponCode: couponCode, description: description, multipleTimes: multipleTimes, couponValue: couponValue, useCount: 0}]);
          });
    };

     //Form Validation
     const {register,handleSubmit,formState: { errors }} = useForm();
    
     const onSubmit = () => {
         addToList();
     }; 
    
    
    return(
        <div className={`formBlur ${isActive ? "showBlur" : ""}`}>
        <form className={`inputForm ${isActive ? "open" : ""}`}>
            <div className="fieldbox">
                <input {...register("shopName", {required: true})} type="text" placeholder="Shop" className="inputfield" onChange={(event)=>{setShopName(event.target.value)}} />
                {errors?.shopName?.type === "required" && <p className="error-msg">This field is required</p>}
            </div>
            <div className="fieldbox">
                <input {...register("couponCode", {required: true})} type="text" placeholder="Code" className="inputfield" onChange={(event)=>{setCouponCode(event.target.value)}} />
                {errors?.couponCode?.type === "required" && <p className="error-msg">This field is required</p>}
            </div>
            <div className="fieldbox">
                <input {...register("couponValue", {required: true})} type="text" placeholder="Betrag (€/%)" className="inputfield" onChange={(event)=>{setCouponValue(event.target.value)}} />
                {errors?.couponValue?.type === "required" && <p className="error-msg">This field is required</p>}
            </div>
            <div className="fieldbox">
                <input type="text" className="inputfield" placeholder="Kategorie" onChange={(event)=>{setDescription(event.target.value)}}/>
            </div>
            
            <div className="row">
                <label>Mehrfach einlösbar</label>
                <input type="checkbox" onClick={(event)=>{setMultipleTimes(event.target.checked)}}/>
            </div>
            
            <button className="submitButton" onClick={handleSubmit(onSubmit)}>Add to List</button>
            
        </form>
        </div>
       
    );
};

export default Form; //Export Component
