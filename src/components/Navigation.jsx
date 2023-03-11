import React, { useState } from 'react'

function Navigation({textEnter,textLeave}) {
  const [navbarObject , setNavbarObject] = useState([
    "Hi",
    "Skills",
    "Projects",
    "Tesimonial",
    "Contact"
  ])
  return (
    <nav>
        <div className="container">
            <ul       
                onMouseEnter={textEnter} 
                onMouseLeave={textLeave}>
                {
                  navbarObject.map(link =>( 
                    <li 
                    key={link}
                    >{link}</li>
                  ))
                }
            </ul>   
        </div>      
    </nav>
  )
}

export default Navigation
