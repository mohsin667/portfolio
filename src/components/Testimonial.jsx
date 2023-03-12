import React, {useEffect} from 'react'
import {motion,useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { bio,container } from '../animations/flag';

function Testimonial() {
    const [ref, inView] = useInView();
    const animation = useAnimation()

    useEffect(() => {
        if(inView) {
            animation.start("visible")
        }
    },[inView])
    return (
        <motion.section 
            ref={ref}
            animate={animation}
            initial="hidden"
            variants={container}
            className='testimonial-wrapper'>
            <div className="container">
                <motion.div variants={bio.container} className="testimonial">
                    <motion.div variants={bio.child} className="text-wrapper">
                        <div className='subtitle'>Tesimonial</div>
                        <h2 >
                            <span>what</span>
                            <span>People</span>
                            says.
                        </h2>
                    </motion.div>
                    <div  className="testimonial-cards">
                        <motion.div variants={bio.child} className="card">
                            <div className="content">
                                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="testimonial" />
                                <div className="name-and-des">
                                    <h4>Alex Regelman</h4>
                                    <p>co-founder, colabrio</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi illum cum aperiam ullam eaque ab obcaecati atque? Eveniet explicabo aspernatur rerum aliquam, at esse.</p>
                            </div>
                        </motion.div>
                        <motion.div variants={bio.child} className="card">
                            <div className="content">
                                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="testimonial" />
                                <div className="name-and-des">
                                    <h4>Alex Regelman</h4>
                                    <p>co-founder, colabrio</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi illum cum aperiam ullam eaque ab obcaecati atque? Eveniet explicabo aspernatur rerum aliquam, at esse.</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>  
    )
}

export default Testimonial
