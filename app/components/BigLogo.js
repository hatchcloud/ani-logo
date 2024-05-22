import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

const BigLogo = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center absolute top-0 pointer-events-none'>
        <motion.div layoutId="logo" className='w-3/4 md:w-1/2 h-16 md:h-40 relative'>
        <Image
            className="object-contain"
            src={`/jps-logo.svg`}
            fill
            loading="lazy"
            priority={false}
        />
        </motion.div>
    </div>
  )
}

export default BigLogo