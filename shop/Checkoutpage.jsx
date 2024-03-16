import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "../components/Modal.css"
import { useLocation, useNavigate } from 'react-router-dom';


const Checkoutpage = () => {
  const [show,setShow]=useState(false);
  const [activeTab,setActivetab]=useState("Visa");
  // handle tab change
  const handletabchange=(tabId)=>{
    setActivetab(tabId)
  }

  const handleshow=()=>setShow(true);
  const handleclose=()=>setShow(false);
//direct to home page
const location=useLocation();
const navigate=useNavigate();
const from=location.state?.from?.pathname || "/"


const handleorderconfirm=()=>{
  alert ("Your order is confirmed Successfully!")
  localStorage.removeItem("cart")
  navigate(from,{ replace: true })
}

  return (
    <div className='modalCard'>

      <Button variant='primary' className='py-2' onClick={handleshow}>Proceed to Checkout</Button>
    <Modal show= {show} onHide={handleclose} animation={false} className='modal fade' centered >
        <div className='modal-dialog'>
           <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
           <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                  <li className='nav-item' role='presentation'>
                    <a href="#visa" 
                     id='visa-tab'
                     role='tab'
                     data-toggle= "tab"  
                     aria-controls='visa'
                     aria-selected={activeTab === 'Visa'}

                    onClick={()=>handletabchange("visa")}
                    className={`nav-link ${activeTab==="visa" ? "active" : ""}`}> 
                    <img src="/visa-mastercard.jfif" alt="" width={80} />
                    </a>
                    </li>
                    <li className='nav-item' role='presentation'>
                    <a href="#paypal" 
                    id='paypal-tab'
                    role='tab'
                    data-toggle= "tab"  
                    aria-controls='paypal'
                    aria-selected={activeTab === 'paypal'}
                    onClick={()=>handletabchange("paypal")}
                    className={`nav-link ${activeTab==="paypal" ? "active" : ""}`}> 
                    <img src="PayPal-logo-2014-1.jpg" alt="" width={80} />
                    </a>
                    </li>

                   
                </ul>
                {/* contents */}
                <div className="tab-content" id='myTabContent'>
                    {/* visa content */}
                    <div className={`tab-pane fade ${activeTab==="visa" ? "show active" : ""}`}
                    id='visa'
                    role='tabpanel' 
                    aria-labelledby='visa-tab'
                    >
                      {/* visa-tab content */}
                      <div className="mt-4 mx-4">
                        <div className="text-center">
                          <h5>Credit Card</h5>
                        </div>
                        <div className="form mt-3">
                          <div className="inputbox">
                            <input type="text" name='name' id='name' className='form-control' required/>
                            <span>Cardholder Name</span>
                          </div>
                          <div className="inputbox">
                            <input type="text" min={"1"} max={"999"} name='number' id='number' className='form-control' required/>
                            <span>Card Number</span> <i className='fa fa-eye'></i>
                          </div>
                          <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input type="text" min={"1"} max={"999"} name='number' id='number' className='form-control' required/>
                            <span>Expiration Dte</span> 
                          </div>
                          <div className="inputbox">
                            <input type="text" min={"1"} max={"999"} name='number' id='number' className='form-control' required/>
                            <span>Cvv</span> 
                          </div>
                          </div>
                          <div className="px-5 pay">
                            <button className='btn btn-success btn-block' onClick={handleorderconfirm}>Order Now</button>
                          </div>
                         
                    </div>
                   
                   
                </div>
    
              </div>
               {/* paypal content */}
              <div className={`tab-pane fade ${activeTab==="paypal" ? "show active" : ""}`} id='paypal' role='tabpanel' aria-labelledby='paypal-tab'>
                       <div className="mt-4 mx-4">
                        <div className="text-center">
                          <h5>Paypal Account Info</h5> 
                        </div>
                        <div className="form mt-3">
                          <div className="inputbox">
                            <input type="text" name='name' id='name' className='form-control' required/>
                            <span>Enter your email</span>
                          </div>
                          <div className="inputbox">
                            <input type="text" min={"1"} max={"999"} name='number' id='number' className='form-control' required/>
                            <span> Your Name</span> 
                          </div>
                          
                          <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input type="text" min={"1"} max={"999"} name='number' id='number' className='form-control' required/>
                            <span>Extra info</span> 
                          </div>
                          <div className="inputbox">
                            <input type="text" min={"1"} max={"999"} name='number' id='number' className='form-control' required/>
                            <span></span> 
                          </div>
                          </div>
                         
                          
                          <div className="px-5 pay">
                            <button className='btn btn-primary btn-block' onClick={handleorderconfirm}>Order Now</button>
                          </div>
                         
                    </div>
                    
                </div>
                    </div>
            </div>
            {/* payment disclaimer */}
            <p className='mt-3 px-4 p-Disclaimer'><em>Payment disclaimer:</em>In no event shall payment or partial payment by owner by any material or service</p>
           </div>
        </div>
        </div>
        </div>
      </Modal>
    

    </div>
    
  )
}

export default Checkoutpage
