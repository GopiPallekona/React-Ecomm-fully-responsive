import React from 'react'

                    
 const Pagination = ({ productsperpage,totalproducts,paginate,activepage}) => {
    const pagenumbers=[];
   for( let i=1 ; i<=Math.ceil(totalproducts/productsperpage); i++){
    pagenumbers.push(i)
   }
        
    
  return (
    <ul className='default-pagination lab-ul'>
        <li>
            <a href="#" onClick={()=>{
                if (activepage <pagenumbers.length) {
                    paginate(activepage - 1)
                }
            }}>
                <i className='icofont-rounded-left'></i>
            </a>
        </li>
      {
        pagenumbers.map((number)=>(
            <li key={number} className={`page-item ${number===activepage ? "bg-danger" : ""}`}>
                <button className='bg-transparent' onClick={()=>paginate(number)}>{number}</button>
            </li>
        ))
      }
       <li>
            <a href="#" onClick={()=>{
                if (activepage <pagenumbers.length) {
                    paginate(activepage + 1)
                }
            }}>
                <i className='icofont-rounded-right'></i>
            </a>
        </li>
    </ul>
  )
}

export default Pagination
