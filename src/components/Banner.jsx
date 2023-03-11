import React from 'react'
import Banner_Image from "../assets/bg.png";
import Heading from '../animations/Heading';
import Tilt from 'react-parallax-tilt';
import Subheading from '../animations/Subheading';
import Bio from '../animations/Bio';
import Image from './Image';

function Banner({textEnter,textLeave}) {
  return (
    <header className='gloabal'>
        <img className='background' src={Banner_Image} alt="banner" />
        <div className="overlay"></div>
        <div className="container">
            <div className="inner-content">
                <Tilt tiltMaxAngleX="10" tiltMaxAngleY="10" options={{ max : 5 }}>
                    <Image />
                </Tilt>
                <div className="personal-info">
                    <Heading textEnter={textEnter} textLeave={textLeave} text="John Doe"/>
                    <Subheading text="Frontend developer, Ui/UX Designer" />
                    <Bio />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Banner
