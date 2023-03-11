import React from 'react'
import {AiFillGithub , AiFillInstagram , AiFillYoutube} from "react-icons/ai"
import {bio,social} from "./flag"
import {motion} from "framer-motion"
function Bio() {
  return (
    <>
        <motion.div 
            variants={bio.container} 
            initial="hidden" 
            animate="visible"
            className="bio">
            <motion.div 
                variants={bio.child}
                className='row'>
                <div className="info">Age</div>
                <div className='detail'>23 yr</div>
            </motion.div>
            <motion.div 
                variants={bio.child}
                className='row'>
                <div className="info">Phone</div>
                <div className='detail'>+91982299392032</div>
            </motion.div>
            <motion.div 
                variants={bio.child}
                className='row'>
                <div className="info">Email</div>
                <div className='detail'>devshalayt@gmail.com</div>
            </motion.div>
            <motion.div 
                variants={bio.child}
                className='row'>
                <div className="info">Address</div>
                <div className='detail'>1st Floor, A-33 Rajouri Garden, Ring Road, Opp. Flyover</div>
            </motion.div>
        </motion.div>

        <motion.div 
            variants={social.container} 
            initial="hidden" 
            animate="visible"
            className="social">
            <motion.div variants={social.child} className="links"><AiFillGithub size="28"/></motion.div>
            <motion.div variants={social.child} className="links"><AiFillInstagram size="28"/></motion.div>
            <motion.div variants={social.child} className="links"><AiFillYoutube size="35"/></motion.div>
        </motion.div>
    </>
  )
}

export default Bio
