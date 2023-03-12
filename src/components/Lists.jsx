import {motion} from 'framer-motion';
import {bio} from '../animations/flag'
import List from "./List"
function Lists({type,animate}) {
  if(type === "education") {
    return (
      <motion.ul
        initial="hidden"
        variants={bio.container}
        animate={animate}
        >
        <List>
          <div className="passing-year">2006 - 2010</div>
          <strong>
              <p>BACHELOR DEGREE - <span>TUNIS HIGH SCHOOL</span></p>
          </strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore</p>
          <p>sed do eiusmod tempor ut labore</p>
          </List>
        <List>
          <div className="passing-year">2006 - 2010</div>
          <strong>
              <p>BACHELOR DEGREE - <span>TUNIS HIGH SCHOOL</span></p>
          </strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore</p>
          <p>sed do eiusmod tempor ut labore</p>
          </List>
        <List>
          <div className="passing-year">2006 - 2010</div>
          <strong>
              <p>BACHELOR DEGREE - <span>TUNIS HIGH SCHOOL</span></p>
          </strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore</p>
          <p>sed do eiusmod tempor ut labore</p>
          </List>
      </motion.ul>
    )
  }
  if(type === "employment") {
    return (
      <motion.ul
        initial="hidden"
        variants={bio.container}
        animate={animate}
        >
        <List>
          <div className="passing-year">2006 - 2010</div>
          <strong>
              <p>SOFTWARE ENGINEER - <span>APPLE</span></p>
          </strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore</p>
          <p>sed do eiusmod tempor ut labore</p>
          </List>
        <List>
          <div className="passing-year">2006 - 2010</div>
          <strong>
              <p>WEB DESIGNER  - <span>FACEBOOK</span></p>
          </strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore</p>
          <p>sed do eiusmod tempor ut labore</p>
          </List>
        <List>
          <div className="passing-year">2006 - 2010</div>
          <strong>
              <p>FRONTEND DEVELOPER - <span>GOOGLE</span></p>
          </strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore</p>
          <p>sed do eiusmod tempor ut labore</p>
          </List>
      </motion.ul>
    )
  }
}

export default Lists
