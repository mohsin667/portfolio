import React,{useEffect} from 'react'
import {skillsData} from "../mock"
import {motion, useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { bio } from '../animations/flag';
import Componentheading from './Componentheading';
function Skills() {
    const [ref, inView] = useInView({
        threshold: 0.5
    });
    const animation = useAnimation();
    const list = useAnimation();
    const heading= useAnimation();
    const container = {
        visible: { opacity: 1,y:0,transition:{type: "tween", duration: 1 ,sdelayChildren: 1 }},
        hidden: { opacity: 0,y:20 }
    }

    useEffect(()=> {
        if(inView) {
            animation.start("visible")
            list.start("visible")
            heading.start("visible")
        }
    },[animation,inView])
    return (
        <motion.section 
            animate={animation}
            initial="hidden"
            variants={container}
            ref={ref}
            className='gloabal skills'>
            <div className='container'>
                <Componentheading animate={heading}>Skills</Componentheading>
                <div className="progress-wrapper">
                    <motion.ul
                        initial="hidden"
                        variants={bio.container}
                        animate={list}>
                        {
                            skillsData.map((data,index) => (
                                <motion.li variants={bio.child} key={index}>
                                    <p>{data.skill}</p>
                                    <div className="progress-bar">
                                        <div 
                                            style={{width: data.percentage+"%"}}
                                            className="progress"></div>
                                    </div>
                                    <p className='percentage'>{data.percentage}%</p>
                                </motion.li>
                            ))
                        }
                    </motion.ul>
                </div>
            </div>
        </motion.section>
    )
}

export default Skills
