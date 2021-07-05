//Import Modules
import React,{useState} from 'react';
import Axios from 'axios';
//Import Components
import Coupon from './Coupon';

//Coupon List Component
const CouponList = ({isActive, couponList, setCouponList}) =>{

    //State Hook for Search Input Field
    const [searchTerm, setSearchTerm] = useState('');

    return(
        <div className={`couponList ${isActive ? "blur" : ""}`}>
            <div className="listHeader">
            <h3 className="listHeading">Finde dein Schnäppchen</h3>
            <input className="searchField" type="text" placeholder="Suchen..." onChange={(event)=>setSearchTerm(event.target.value)}/>
            </div>
            
            {couponList.filter((val)=>{
                if(searchTerm==""){ 
                    return val; //Return all Coupons with empty String in Search Field
                } else if(val.shopName.toLowerCase().includes(searchTerm.toLowerCase())){ 
                    return val; //Return all Coupons with specific String from the Search Input
                }
            }).map((val, key)=>{
                return(
                    <Coupon val={val} key={key} couponList={couponList} setCouponList={setCouponList}/>
                );
            })}
        </div>
    );
}

export default CouponList; //Export Component