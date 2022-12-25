import React from 'react'
import { forwardRef } from 'react';
import './style.css'

import MenuItems from './MenuItems'
const Menu = forwardRef(({list},ref) => (
    <main ref={ref}>
      {list.map((item)=>(
       <MenuItems key={item.id} item={item}/>
        ))}
    </main>
  )
)

export default Menu
