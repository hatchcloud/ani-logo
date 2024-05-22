'use client'
import React from 'react'
import SmallLogo from './SmallLogo'
import BigLogo from './BigLogo'
import { useState } from "react";

const MenuBar = () => {
  const [showSecond, setShowSecond] = useState(false);
  return (
    <section className=' h-full w-full flex justify-center items-center'>
    <nav className=' w-full flex justify-between max-w-[1200px] py-4 px-2 '>
     <div className=' w-[215px] '>
       {!showSecond && <SmallLogo />}
     </div> 
      <ul className='flex gap-2'>
        <li><a href="#">Somos</a></li>
        <li><a href="#">Contacto</a></li>
    </ul>
    </nav>
    {showSecond && <BigLogo />}

    <button className=' absolute mb-10 bottom-0 w-full' onClick={() => setShowSecond((s) => !s)}>
      Animate
    </button>
    </section>
  )
}

export default MenuBar
