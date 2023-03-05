import React from 'react'
import Banner_Image from "../assets/bg.png";
import {AiFillGithub , AiFillInstagram , AiFillYoutube} from "react-icons/ai"
function Banner() {
  return (
    <header className='gloabal'>
        <img className='background' src={Banner_Image} alt="banner" />
        <div className="overlay"></div>
        <div className="container">
            <div className="inner-content">
                <div className="image-box">
                    <img src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>

                <div className="personal-info">
                    <h1>John Doe</h1>
                    <p>Frontend developer, Ui/UX Designer</p>

                    <div className="bio">
                        <div className='row'>
                            <div className="info">Age</div>
                            <div className='detail'>23 yr</div>
                        </div>
                        <div className='row'>
                            <div className="info">Phone</div>
                            <div className='detail'>+91982299392032</div>
                        </div>
                        <div className='row'>
                            <div className="info">Email</div>
                            <div className='detail'>devshalayt@gmail.com</div>
                        </div>
                        <div className='row'>
                            <div className="info">Address</div>
                            <div className='detail'>1st Floor, A-33 Rajouri Garden,[], Ring Road, Opp. Flyover</div>
                        </div>
                    </div>

                    <div className="social">
                        <div className="links"><AiFillGithub size="28"/></div>
                        <div className="links"><AiFillInstagram size="28"/></div>
                        <div className="links"><AiFillYoutube size="35"/></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Banner
