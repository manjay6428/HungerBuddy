import React from 'react'
import './style.css'
import { connect } from 'react-redux';
import {Link,useNavigate} from 'react-router-dom';
import {createStructuredSelector} from 'reselect'
import { selectCartItemsCount } from '../../../redux/cart/cart.selector';
const CartCountButton = ({cartCount}) => {
  const navigate = useNavigate();
  return (
    <div className='btnCartCount'onClick={()=>navigate('/cart')}>
      <div className='count'>{cartCount>=100? '99+': cartCount}</div>
      <i className="fas fa-shopping-cart"></i>
      
    </div>
  )
}

const mapStateToProps=createStructuredSelector({
  cartCount: selectCartItemsCount,
})

export default connect(mapStateToProps)(CartCountButton);
