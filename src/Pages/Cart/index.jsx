import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import Logo from '../../Components/Common/Logo'
import {Link,useNavigate} from 'react-router-dom'
import './style.css'
import Menu from '../../Components/Common/Menu'
import Footer from '../../Components/Common/Footer'
import EmptyCart from '../../Components/Cart/EmptyCart'

import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/cart/cart.selector'
const Cart = ({cartCount,cartList,cartTotal}) => {
  const navigate = useNavigate();
  return(
      <div>
    <div className="cart-header">
    <Logo/>
    </div>
    
    <div className="goToHome">
    <button onClick={()=> navigate('/')} id="btn1"> <i className='fas fa-long-arrow-alt-left'></i>Home</button>
    </div>
    {cartCount===0? <EmptyCart/>: <div className="orders">
      <h1 style={{color:"red", textAlign:"center", marginBottom:"25px", display:"none"}} id="showText">Thank you for Serving with us. Please visit again!!</h1>
      <h1 className='orders-heading'>Your Orders</h1>
      <div className="orders-menu">
        <Menu list={cartList}/>
      </div>
      <div className="orders-total">
        Your Total ${cartTotal}
      </div>
      <div className="printReceipt">
    {/* <button onClick={()=> navigate('/')}> <i className='fas fa-long-arrow-alt-left'></i>Print Receipt</button> */}
    <button onClick={()=>printreceipt()} id="btn2"> <i className='fas fa-long-arrow-alt-left'></i>Print Receipt</button>
    </div>
    </div>
    }
    
    
      <Footer/>
    </div>
    )
}
  
   const printreceipt = ()=>{
    document.getElementById("showText").style.display="inline-block";
    document.getElementById("btn1").style.display="none";
    document.getElementById("btn2").style.display="none";
    window.print();
   }
 

const mapStateToProps=createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
})
export default connect(mapStateToProps)(Cart)
