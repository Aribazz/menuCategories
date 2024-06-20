import React from 'react';

const Menu = ({itemsProps}) => {
  return <div className='section-center'>
    {itemsProps.map((parameters)=>{
    const {id,img,title,desc,price}=parameters;
    return <article key={id} className='menu-item'>
      <img src={img} alt={title} className='photo' />
  <div className='item-info'>
    <header>
      <h4>{title}</h4>
      <h4 className='price'>{price}</h4>
    </header>
    <p className='item-text'>{desc}</p>
    </div>  
      </article>
})}
  </div>
};

export default Menu;
