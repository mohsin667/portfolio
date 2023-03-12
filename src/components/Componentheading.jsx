import {motion} from 'framer-motion';
import {flag} from '../animations/flag'
function Componentheading({children,animate}) {
    const word = Array.from(children)
    return (
        <motion.h2
            initial="hidden" 
            variants={flag.container} 
            animate={animate}>
            {
            word.map((word,index)=> (
                <motion.span style={{display: "inline-block"}} key={index} variants={flag.child}>{word}</motion.span>
            ))
            }
        </motion.h2>
    )
}

export default Componentheading
