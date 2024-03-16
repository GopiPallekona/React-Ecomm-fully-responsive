import React from 'react'
import Pageheader from '../components/Pageheader'
import { useState } from 'react'
import Data from "../products.json"
import Productcards from './Productcards'
import Pagination from './Pagination'
import Search from './Search'
import Searchcategory from './Searchcategory'
import Popularpost from './Popularpost'
import Tags from './Tags'

const showresult="Showing 01 - 12  of 139 results"

const Shop = () => {
    const[Gridlist,setGridlist] =useState(true);
    const[products,setproducts]=useState(Data);

    // pagination
    const[currentpage,setCurrentpage]=useState(1);
    const productsperpage=12;
    const indexoflastproduct=currentpage * productsperpage;
    const indexoffirstproduct=indexoflastproduct-productsperpage;
    const  currentProducts=products.slice(indexoffirstproduct,indexoflastproduct);
    // fonction to change the current page
    const paginate=(pagenumber)=>{
         setCurrentpage(pagenumber)
    };
    // filter products based on the category
    const[searchcategory,setSearchcategory]=useState("All")
    const menuitems=[...new Set(Data.map((val)=>val.category))];

    const filteritem=(curcat)=>{
      const newitem=Data.filter((newval)=>{
        return newval.category===curcat;
      })
      setSearchcategory(curcat);
      setproducts(newitem);
    }
    // Toggle between list and
  return (
    <div>
      <Pageheader title="Our shop page" curPage= "Shop"/>
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8 col-12">
                <article>
                    {/* layout and title here */}
                    <div className="shop-title d-flex justify-content-between">
                       <p>{showresult}</p>
                       <div className={`product-view-mode ${Gridlist ? "gridActive" : "listActive"}`}>
                         <a className='grid' onClick={()=>setGridlist(!Gridlist)}>
                            <i className='icofont-ghost'></i>
                         </a>
                         <a className='list' onClick={()=>setGridlist(!Gridlist)}>
                            <i className='icofont-listine-dots'></i>
                         </a>
                         </div>
                    </div>
                   {/* product cards */}
                    <div>
                       <Productcards Gridlist={Gridlist} products={currentProducts}/>
                    </div>
                    <Pagination 
                    productsperpage={productsperpage}
                    totalproducts={products.length}
                    paginate={paginate}
                    activepage={currentpage}
                    />
                </article>
               </div>
               <div className="col-lg-4 col-12">
                  <aside>
                    <Search  products={products} Gridlist={Gridlist}/>
                    <Searchcategory 
                    filteritem={filteritem}
                    setitem={setproducts}
                    menuitems={menuitems}
                    setproducts={setproducts}
                    searchcategory={searchcategory}
                    />
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

export default Shop
