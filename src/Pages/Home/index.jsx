import React, { useRef } from 'react'
import './style.css'
import Banner from '../../Components/Home/Banner'
import Menu from '../../Components/Common/Menu'
import Footer from '../../Components/Common/Footer'
import CartCountButton from '../../Components/Common/CartCountButton'
import { menuItemsData } from '../../Components/Common/Menu/data'
const Home = () => {
  const menuRef = useRef();
  const handleScrollMenu=()=>{
    menuRef.current.scrollIntoView({behaviour:'smooth'});
  }
 
  return (
    <div>
      {/* banner */}
      <Banner handleScrollMenu={handleScrollMenu}/>
      {/* menu */}
      <Menu list={menuItemsData} ref={menuRef}/>
      {/* footer */}
      <Footer/>
      {/* cart button  */}
      <CartCountButton/>

    </div>
  )
}

export default Home
