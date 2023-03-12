import React, { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import {motion,useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { bio,container } from '../animations/flag'
function Contact() {
  const form = useRef();
  const animation = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.5
  });
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_d2jyrnf', 'template_yt28o0r', form.current, 'stRxVFnyVvpZpRvE_')
      .then((result) => {
          console.log(result.text);
          alert("Thank You, I have recieved your email!")
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
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
      className='contact-us'>
      <div className="container">
        <motion.div variants={bio.container} className="contact-wrapper">
          <motion.div variants={bio.child} className="form-text">
            <div className='subtitle'>Contact Us</div>
            <h2>GET IN TOUCH.</h2>
          </motion.div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="first-column">
              <motion.div variants={bio.child} className="input-row">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name="user_name"/>
              </motion.div>
              <motion.div variants={bio.child} className="input-row">
                <label htmlFor="Subject">Subject</label>
                <input type="text" id='Subject' name="subject"/>
              </motion.div>
              <motion.div variants={bio.child} className="input-row">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' name="user_email"/>
              </motion.div>
            </div>
            <div className="second-column">
              <motion.div variants={bio.child} className="input-row">
                <label htmlFor="message">Message</label>
                <textarea id='message' name="message"/>
              </motion.div>
              <motion.div variants={bio.child} className="input-row">
                <button type="submit" value="Send">Submit</button>
              </motion.div>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact
