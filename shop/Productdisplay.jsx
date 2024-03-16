import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const desc="STARTTID bags are packed with smart functions that make short trips easier for you and the whole family. They are designed for people on the go – so that everyone always has what they need with them."
const Productdisplay = ({item}) => {
    const {id,name,seller,price,ratingsCount,quantity,img} = item;

    const[prequantity,setquantity]=useState(quantity);
    const[coupan ,setCoupan]=useState("");
    const[size,setSize]=useState("select size");
    const[color,setColor]=useState("select color");

    const handleselectsize=(e)=>{
        setSize(e.target.value);
    }
    const handleselectcolor=(e)=>{
        setColor(e.target.value);
    }
    const handledecbutton=()=>{
        if (prequantity > 1) {
            setquantity(prequantity-1)
        }
        
    }
    const handleincbutton=()=>{
        setquantity(prequantity+1)
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        const product={
            id:id,
            img:img,
            name:name,
            price:price,
            quantity:prequantity,
            size:size,
            color:color,
            coupan:coupan

        }
       // console.log(product)
       const existingcart=JSON.parse(localStorage.getItem("cart")) || [];
       const existingproductindex=existingcart.findIndex((item)=>item.id===id);

       if (existingproductindex !== -1) {
          existingcart[existingproductindex].quantity += prequantity;
       }
       else{
        existingcart.push(product)
       }
       //update local storage
       localStorage.setItem("cart",JSON.stringify(existingcart));
       //reset form field
       setquantity(1);
       setColor("select color");
       setSize("select size");
       setCoupan("");
    }
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className='rating'>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <span>{ratingsCount} Reviews</span>
        </p>
        <h4>${price}</h4>
        <h4>{seller}</h4>
        <p>{desc}</p>
      </div>
      {/* cart components */}
      <div>
        <form onSubmit={handlesubmit} >
            {/* size */}
            <div className="select-product size">
                <select  value={size} onChange={handleselectsize}>
                    <option>Select Size</option>
                    <option>SM</option>
                    <option>MD</option>
                    <option>LG</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
                <i className="icofont-rounded-up"></i>
            </div>
            {/* color */}
            <div className="select-product color">
                <select  value={color} onChange={handleselectcolor}>
                    <option>Select Color </option>
                    <option>Pink</option>
                    <option>Ash</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Green</option>
                </select>
                <i className="icofont-rounded-up"></i>
            </div>
            {/* cart plus minus */}
            <div className="cart-plus-minus">
                <div className='dec qtybutton' onClick={handledecbutton}>-</div>
                <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={prequantity} onChange={(e)=>setquantity(parseInt(e.target.value,10))}/>
                <div className='inc qtybutton' onClick={handleincbutton}>+</div>
            </div>
            {/* coupan field */}
            <div className="discount-code mb-2">
                <input type="text" placeholder="Enter Coupon Code" onChange={(e)=>setCoupan(e.target.value)}/>
            </div>
            {/* button section */}
            <button type='submit' className='lab-btn'><span>Add to Cart</span></button>
            <Link to={"/cart-page"} className='lab-btn bg-primary'><span>Checkout</span></Link>
        </form>
      </div>

    </div>
  )
}

export default Productdisplay
