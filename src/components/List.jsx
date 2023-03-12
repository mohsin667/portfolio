import React from 'react'
import {bio} from '../animations/flag'
import {motion} from 'framer-motion';
function List({children}) {
  return (
    <motion.li
        variants={bio.child}>
        {children}
    </motion.li>
  )
}

export default List
