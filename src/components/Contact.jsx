import React from 'react'

function Contact() {
  return (
    <section className='contact-us'>
      <div className="container">
        <div className="contact-wrapper">
          <div className="form-text">
            <div className='subtitle'>Contact Us</div>
            <h2>GET<br/> IN<br /> TOUCH.</h2>
          </div>
          <form>
            <div className="first-column">
              <div className="input-row">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' />
              </div>
              <div className="input-row">
                <label htmlFor="Subject">Subject</label>
                <input type="text" id='Subject' />
              </div>
              <div className="input-row">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' />
              </div>
            </div>
            <div className="second-column">
              <div className="input-row">
                <label htmlFor="message">Message</label>
                <textarea id='message' />
              </div>
              <div className="input-row">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
