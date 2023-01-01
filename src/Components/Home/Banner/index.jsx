import React from 'react'
import './style.css'
import bannerImg from './bannerImg.png'
import Logo from '../../Common/Logo'

const Banner = (handleScrollMenu) => {
  return (
    <header>
        <div className='header-content'>
            <Logo/>
            <div className='header-main'>
                <h1>Delicious Food for your cravings</h1>
                <p>We make Fresh and Healthy meals with different recipies</p>
                <button onClick={handleScrollMenu}>
                    View Menu <i className='fas fa-long-arrow-alt-right'></i>
                </button>
            </div>
        </div>
        <img  src={bannerImg} alt='banner' className='header-img'></img>
       
    </header>
  )
}

export default Banner
