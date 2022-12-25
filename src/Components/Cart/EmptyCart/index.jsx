import React from 'react'
import './style.css'
import emptyCartImg from './' 
import {Link,useNavigate} from 'react-router-dom'
const EmptyCart = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="emptyCart">
        <img src="https://www.nicepng.com/png/detail/231-2317775_no-products-in-cart-empty-shopping-cart-icon.png" alt="empty" />
        <button onClick={()=> navigate('/')}> <i className='fas fa-long-arrow-alt-left'></i>Shop Now</button>
      </div>
    </div>
  )
}

export default EmptyCart
