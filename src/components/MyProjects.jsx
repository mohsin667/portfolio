import React,{useEffect, useState} from 'react'
import {tabData,tabLink} from "../mock"
import {motion,useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import {bio,staticAnimation} from '../animations/flag'
import Componentheading from './Componentheading';
function MyProjects() {
    const [defaultState,setDefaultState] = useState("All")
    const [tabState,setState] = useState(tabData)
    const [random,setRandom] = useState(1)
    const animation = useAnimation()
    const heading = useAnimation()
    const tabAnimation = useAnimation()
    const [ref,inView] = useInView({
        threshold: 0.2
    })
    const handleTabLink = (index,tab) => {
        setRandom(new Date().getSeconds())
        setDefaultState(tab)
        if(tab !=="All") {
            const temp = tabData.filter((data)=> {
                return data.type === index
            })
            setState(temp)
        }
        else {
            setState(tabData)
        }
    }
    useEffect(()=> {
        if(inView) {
            animation.start("visible")
            heading.start("visible")
            tabAnimation.start("visible")
        }
    },[inView,random])
    return (
        <section className='my-project'>
            <div className="container">
                <Componentheading animate={heading}> My Projects </Componentheading>
                <motion.div 
                    initial="hidden"
                    variants={staticAnimation.container}
                    animate={tabAnimation}
                    className="tabs">
                    <motion.div variants={staticAnimation.child} className={`tabs-item ${defaultState === "All" && "active"}`} onClick={()=> handleTabLink(null,"All")}>All</motion.div>
                    {tabLink.map((link,index)=> (
                        <motion.div variants={staticAnimation.child} key={index} onClick={()=> handleTabLink(link,index)} className={`tabs-item ${index === defaultState && "active"}`}>{link}</motion.div>
                    ))}
                </motion.div>
                
                <motion.div 
                    ref={ref}
                    key={random}
                    initial="hidden"
                    variants={bio.container}
                    animate={animation}
                    className="tab-container">
                    {tabState.map((item,index) => (
                        <motion.div 
                            variants={bio.child}
                            key={`tab-${index}`} className="tab-content">
                            <div className="image-wrapper">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="tab-text-content">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <span>USED STACK:</span>
                                <div className="tags">
                                    {item.tags.map((tag,ind)=>(
                                        <span key={`tags-${ind}`}>{tag}</span>
                                    ))}
                                </div>
                                <div className="source">
                                    <a href={`http://www.google.com`}>{item.source}</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default MyProjects
