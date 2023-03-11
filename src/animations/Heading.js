import React from 'react'
import {motion} from 'framer-motion'
import {flag} from "./flag"

function Heading({text,textEnter,textLeave}) {
    const letters = Array.from(text)

    
  return (
    <motion.h1 style={{display: "flex"}} 
        variants={flag.container} 
        initial="hidden" 
        animate="visible"
        onMouseEnter={textEnter} 
        onMouseLeave={textLeave}
        >
      
        {letters.map((word,ind) => (
            <motion.span 
                variants={flag.child} 
                key={ind}
                > 
                {word ==="" ? " ": word}
            </motion.span>
        ))}
        
    </motion.h1>
  )
}

export default Heading
