import React from 'react'
import Data from "../products.json"
const Searchcategory = ({filteritem,setitem,menuitems,setproducts,searchcategory}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className='ms-2'>All Category</h5>
      </div>
      <div>
        <button onClick={()=>setproducts(Data)} className={`m-2 ${searchcategory==="All" ? "bg-warning" : "" }`}>All</button>
        {
            menuitems.map((val,id)=>{
                return (
                    <button className={`m-2 ${searchcategory===val ? "bg-warning" : "" }`} key={id} onClick={()=>filteritem(val)}> {val}</button>
                )
            })
        }
      </div>
    </>
  )
}

export default Searchcategory
