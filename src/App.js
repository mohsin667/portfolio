import { useState,useEffect } from 'react';
import './App.scss';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Intro from './components/Intro';
import Resume from './components/Resume';
import Employment from './components/Employment';
import Skills from './components/Skills';
import MyProjects from './components/MyProjects';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Loader from './components/Loader';
import {motion} from 'framer-motion'
function App() {
  const [isLoading, setIsLoading] = useState(false)
  // const [cursorText, setCursorText] = useState("")
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  useEffect(() => {
    const mouseMove = e => {
      setCursor({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  },);

  const variants = {
    default: {
      x: cursor.x - 16,
      y: cursor.y - 16,
      left: 8,
      top: 8,
      backgroundColor: "rgb(225,225,225)",
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    text: {
      height: 70,
      width: 70,
      x: cursor.x - 35,
      y: cursor.y - 35,
      backgroundColor: "rgb(255,255,255)",
      mixBlendMode: "difference"
    }
  }
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <>
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      >
      </motion.div>
      <Loader isLoading={isLoading} setIsLoading={setIsLoading}/>
      {
        isLoading && 
        <>
          <main>
            <Navigation textEnter={textEnter} textLeave={textLeave} />
            <Banner textEnter={textEnter} textLeave={textLeave} />
            <Intro />
            <hr />
            <Resume />
            <Employment />
            <Skills />
            <MyProjects />
            <Testimonial />
            <Contact />
            <Footer />
          </main>
        </>
      }
    </>
  );

}

export default App;
