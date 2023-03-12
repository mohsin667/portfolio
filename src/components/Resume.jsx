import React, { useEffect } from 'react';
import {motion,useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Componentheading from './Componentheading';
import Lists from './Lists';

export default function Resume() {
    const [ref, inView] = useInView({
        threshold: 0.5
    });
    const animation = useAnimation()
    const heading = useAnimation()
    const list = useAnimation()
    const container = {
        visible: { opacity: 1,y:0,transition:{type: "tween", duration: 1 ,sdelayChildren: 1 }},
        hidden: { opacity: 0,y:20 }
    }

    useEffect(()=> {
        if(inView) {
            animation.start("visible")
            heading.start("visible")
            list.start("visible")
        }
    },[animation,inView])
  return (
    <motion.div 
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={container}
        className='gloabal intro education'>
        <div className="container">
            <Componentheading animate={heading}>
                Education
            </Componentheading>
            <Lists animate={list} type="education"/>
        </div>
    </motion.div>
  )
}
