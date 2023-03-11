import React from 'react'
import {motion} from 'framer-motion'
import { childFlag } from './flag'

function Subheading({text}) {
    const letters = Array.from(text)
   
  return (
    <motion.p
        variants={childFlag.container} 
        initial="hidden" 
        animate="visible"
        >
        {letters.map((word,ind) => (
            <motion.span 
            style={{display:'inline-block'}}
            variants={childFlag.child} 
            key={ind}
            transition= {
              {
                default: {
                  duration: 0.3,
                },
              }
            }
            > 
            {word ==="" ? " ": word}
        </motion.span>
        ))}
    </motion.p>
  )
}

export default Subheading
