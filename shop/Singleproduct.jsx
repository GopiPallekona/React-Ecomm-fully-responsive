import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Pageheader from '../components/Pageheader';

import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules"
// Import Swiper styles
import "swiper/css";
import Productdisplay from './Productdisplay';
import Review from './Review';
import Popularpost from './Popularpost';
import Tags from './Tags';

const Singleproduct = () => {
  const [products,setProducts] =useState([]);
  const {id}=useParams();

  useEffect(()=>{
    fetch("/src/products.json").then((res)=>res.json()).then((data)=>setProducts(data));

    
  },[])
  const result =products.filter((p)=>p.id===id);


  return (
    <div>
      <Pageheader  title={"OUR SHOP SINGLE"} curPage={"/shop/Single Product"} />
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
               <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                        <div className="product-thumb">
                          <div className="swiper-container pro-single-top">
                          <Swiper className="mySwiper"
                          spaceBetween={30}
                          slidesPerView={1}
                          loop={"true"}
                          autoplay={{
                            delay:5000,
                            disableOnInteraction: false
                          }}
                          modules={[Autoplay]}
                          navigation={{
                            prevEl:".pro-single-prev",
                            nextEl:".pro-single-next"
                          }}
                          >
                            {
                              result.map((item,i)=>(
                                <SwiperSlide key={i}>
                                  <div className="single-thumb">
                                    <img src={item.img} alt="" />
                                  </div>
                                </SwiperSlide>
                              ))
                            }    
                           </Swiper>
                           <div className="pro-single-prev">
                            <i className='icofont-rounded-right'></i>
                           </div>
                           <div className="pro-single-next">
                            <i className='icofont-rounded-left'></i>
                           </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                    <div className="post-content">
                {
                  result.map((item)=> <Productdisplay key={item.id} item={item} />)
                }
              </div>  
                    </div>
                  </div>
                </div>
                <div className="review">
                  <Review />
                </div>
               </article>
            </div>
            {/* right side */}
            <div className="col-lg-4 col-12">
             <aside className='ps-lg-4'>
               <Popularpost />
               <Tags />
             </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singleproduct
