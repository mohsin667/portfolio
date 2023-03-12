import React from 'react'
import {motion} from 'framer-motion'

function Intro() {
  const container = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        staggerChildren: 0.5,
        delayChildren: 0.8,
        delay: 2,
        duration: 1
      }
    },
    hidden: {
      opacity: 0,
    }
  }
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 1
      }
    },
    hidden: {
      opacity: 0,
      y: 25
    }
  }
  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="visible"
      className='intro'>
        <div className="container">
            <motion.h2
              variants={child}
            >HI_</motion.h2>
            <motion.p
              variants={child}
            >I am Junior Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.</motion.p>
            <motion.div 
              variants={child}
              className="button-wrapper">
              <button>DOWNLOAD CV</button>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default Intro
