import React, { useEffect, useState } from 'react'
import Pageheader from '../components/Pageheader';
import { Link } from 'react-router-dom';
import delImgUrl from '../assets/images/shop/del.png'
import Checkoutpage from './Checkoutpage';


const Cartpage = () => {
    const[cartitems,setCartitems]=useState([]);
    useEffect(()=>{
     //fetch cart items from local storage
     const storedcartitems= JSON.parse(localStorage.getItem("cart")) || [];
     setCartitems(storedcartitems)
    },[])
    //calculate price
    const calculaptetotalprice=(item)=>{
    return    item.price * item.quantity;
    }
    //handle quantity increase
    const handleincrease=(item)=>{
        item.quantity += 1;
        setCartitems([...cartitems])
         //update local storage with new cart items
    localStorage.setItem("cart",JSON.stringify(cartitems));
    }
   // handle quantity decrease
   const handledecrease=(item)=>{
    if (item.quantity >1) {
        item.quantity -= 1;
        setCartitems([...cartitems]);
        //update local storage with new cart items
    localStorage.setItem("cart",JSON.stringify(cartitems)); 
    }
   }
   //handle item remove
   const handleRemoveitem=(item)=> {
    const updatedcart=cartitems.filter((cartitem)=>cartitem.id !== item.id);
    //update new cart
    setCartitems(updatedcart);
    upadatelocalstorage(updatedcart)
   }
   const upadatelocalstorage =(cart)=>{
localStorage.setItem("cart",JSON.stringify(cart));
   }
   //cart subtotal
   const cartsubtotal=cartitems.reduce((total,item)=>{
    return total + calculaptetotalprice(item);
   },0)
   //order total
   const ordertotal=cartsubtotal;
   
  return (
    <div>
      <Pageheader title={"Shop Cart"}  curPage={"Cart Page"}/>
      <div className="shop-cart padding-tb">
        <div className="container">
            <div className="section-wrapper">
                {/* cart top */}
                <div className="cart-top">
                  <table>
                    <thead>
                        <tr>
                            <th className='cat-product'>Product </th>
                            <th className='cat-price'>Price </th>
                            <th className='cat-quantity'>Quantity </th>
                            <th className='cat-toprice'>Total </th>
                            <th className='cat-edit'>Edit </th>
                        </tr>
                    </thead>
                   
                    {/* table body */}
                    <tbody>
                        {
                            cartitems.map((item,indx)=>(
                                <tr key={indx}>
                                 <td className='product-item cat-product'>
                                  <div className="p-thumb">
                                    <Link to={"/shop"}>
                                        <img src={item.img} alt="" />
                                    </Link>
                                  </div>
                                  <div className="p-content">
                                    <Link to={"/shop"}>
                                        {item.name}
                                    </Link>
                                  </div>
                                 </td>
                                 <td className='cat-price'>
                                    {item.price}
                                 </td>
                                 <td className='cat-quantity'>
                                    <div className="cart-plus-minus">
                                       <div className="dec qtybutton" onClick={()=>handledecrease(item)}>-</div>
                                       <input type="text" className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                       <div className="inc qtybutton" onClick={()=>handleincrease(item)}>+</div>

                                    </div>
                                 </td>
                                 <td className='cat-toprice'>{calculaptetotalprice(item)}</td>
                                 <td className="cat-edit">
                                    <a href="#" onClick={()=>handleRemoveitem(item)}><img src={delImgUrl} alt="" /></a>
                                 </td>
                                </tr>
                            ))
                        }
                    </tbody>
                  </table>
                </div>
                {/* cart top ends */}
                {/* cart bottom */}
                <div className="cart-bottom">
                    {/* checkout box */}
                    <div className="cart-checkout-box">
                        <form className='coupon'>
                            <input className='cart-page-input-text' type="text" name="coupon" id="coupon" placeholder='Coupon Code...' />
                            <input type="submit" name="" id=""  value={"Apply Coupon"}/>
                        </form>
                        <form className='cart-checkout'>
                            <input type="submit" value={"Update Cart"} />
                            <div>
                                <Checkoutpage />
                                </div>
                        </form>
                    </div>
                    {/* checkout box ends */}
                    {/* shipping box */}
                    <div className="shiping-box">
                        <div className="row">
                            <div className="col-md-6 col-12">
                               <div className="calculate-shiping">
                                <h3>Calculate Shiping</h3>
                                <div className="outline-select">
                                    <select >
                                        <option value="uk">United Kingdom</option>
                                        <option value="usa">USA</option>
                                        <option value="bd">Bangladesh</option>
                                        <option value="pak">Pakisthan</option>
                                        <option value="ind">India</option>
                                        <option value="nep">Nepal</option>
                                    </select>
                                    <span className="select-icon">
                                        <i className='icofont-rounded-up'></i>
                                    </span>
                                </div>
                                <div className="outline-select shiping-select">
                                <select >
                                        <option value="uk">Newyork</option>
                                        <option value="us">London</option>
                                        <option value="bd">Dhaka</option>
                                        <option value="pak">Karachi</option>
                                        <option value="ind">New Delhi</option>
                                        <option value="nep">Nepal</option>
                                    </select>
                                    <span className="select-icon">
                                        <i className='icofont-rounded-up'></i>
                                    </span>
                                </div>
                                <input type="text" placeholder="Postcode/Zip Code*" name='postcode' id='postcode' className='cart-input-text-box' />
                                <button type='submit'>Update Total</button>
                               </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="cart-overview">
                                    <h3>Cart Totals</h3>
                                    <ul className='lab-ul'>
                                      <li>
                                        <span className='pull-left'>Cart Subtotal</span>
                                         <p className='pull-right'>${cartsubtotal}</p>
                                      </li>
                                      <li>
                                        <span className='pull-left'>Shiping & Handling</span>
                                         <p className='pull-right'>Free Shiping</p>
                                      </li>
                                      <li>
                                        <span className='pull-left'>Order Total</span>
                                         <p className='pull-right'>${ordertotal.toFixed(2)}</p>
                                      </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cartpage
