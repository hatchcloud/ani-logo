import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

const SmallLogo = () => {
  return (
    <motion.div layoutId="logo">
      <Image
        className="object-contain"
        src={`/jps-logo.svg`}
        width={215}
        height={34}
        loading="lazy"
        priority={false}
      />
    </motion.div>
  )
}

export default SmallLogo
