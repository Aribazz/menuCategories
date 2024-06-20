import React from 'react';

const Categories = ({categories,filterItem}) => {
  return( <div className='btn-container'>
    {categories.map((category,index)=>{
      return <button type='text' className='filter-btn'
      key={index}
      onClick={()=>{filterItem(category)}}>
        {category}
      </button>
    })}
   
    
     {/* <button className='filter-btn' onClick={()=>{
    filterItem("all");
    }}>All</button>


    <button className='filter-btn' onClick={()=>{
    filterItem("breakfast");
    }}>breakfast</button>

<button className='filter-btn' onClick={()=>{
    filterItem("lunch");
    }}>Lunch</button>

<button className='filter-btn' onClick={()=>{
    filterItem("shakes");
    }}>Shakes</button> */}
  </div>
  
  )
};

export default Categories;
