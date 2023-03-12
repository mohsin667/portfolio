import React,{useEffect,useRef} from 'react'
import { animate } from 'framer-motion';

function Loader({setIsLoading,isLoading}) {
    const nodeRef = useRef();
    useEffect(() => {
        const node = nodeRef.current;
        const controls = animate(0, 100, {
        duration: 2,
        onUpdate(value) {
          node.textContent = value.toFixed(0)+'%';
        },
        onComplete() {
        setTimeout(()=> {
            setIsLoading(true)
        },500)
        }
    });
    return () => controls.stop();
    }, []);
  return (
    <div className={`${isLoading ? 'shutter completed' : 'shutter'}`}>
          <div ref={nodeRef} className="text">
            100%
          </div>
          <div className="layer"></div>
      </div>
  )
}

export default Loader
