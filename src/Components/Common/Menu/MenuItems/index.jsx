import React from 'react'
import { connect } from 'react-redux';
import ButtonAddremoveItem from '../../ButtonAddremoveItem';
import {createStructuredSelector} from 'reselect'
import { selectCartItems,selectCartItemsCount } from '../../../../redux/cart/cart.selector';

import './style.css'
import { cartAddItem } from '../../../../redux/cart/cart.action';
import { cartRemoveItem } from '../../../../redux/cart/cart.action';

const MenuItems = ({item,cartCount,cartList,cartAddItem,cartRemoveItem}) => {
    const {id,name,info,price,img}=item;
    const handleItemQuatity=()=>{
      let quantity=0;
      if(cartCount!==0){
        const foundItemInCart=cartList.find(item=>item.id===id);
        if(foundItemInCart){
          quantity =foundItemInCart.quantity;
        }
        
      }
      return quantity;
    }
  return (
    <div className='item'>
      <img src={img} alt='items'/>
      <div className='item-head_desc'>
        <p className='head_de'>{name}</p>
        <p className='head_desc-info'><small>{info}</small></p>
      </div>
      <div className='item-foot_desc'>
        <span className='foot_desc-price'>${price}</span>
        <ButtonAddremoveItem 
        quantity={handleItemQuatity()} 
        handleAddItem={()=>cartAddItem(item)}
        handleRemoveItem={()=>cartRemoveItem(item)}

        />
      </div>
    </div>
  )
}

const mapStateToProps=createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
})

const mapDispatchToProps=dispatch=>({
  cartAddItem: item=>dispatch(cartAddItem(item)),
  cartRemoveItem: item=>dispatch(cartRemoveItem(item)),
})

export default connect(mapStateToProps,mapDispatchToProps)(MenuItems)
