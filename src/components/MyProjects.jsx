import React,{useState} from 'react'
import {tabData,tabLink} from "../mock"
// import {motion,AnimatePresence} from "framer-motion"
function MyProjects() {
    const [defaultState,setDefaultState] = useState("All")
    const [tabState,setState] = useState(tabData)
    const handleTabLink = (link,index) => {
        setDefaultState(index)
        if(index !=="All") {
            const temp = tabData.filter((data)=> {
                return data.type === link
            })
            setState(temp)
        }else {
            setState(tabData)
        }
    }
    return (
        <section className='my-project'>
            <div className="container">
                <h2>My Projects</h2>
                <div className="tabs">
                    <div className={`tabs-item ${defaultState === "All" && "active"}`} onClick={()=> handleTabLink(null,"All")}>All</div>
                    {tabLink.map((link,index)=> (
                        <div key={index} onClick={()=> handleTabLink(link,index)} className={`tabs-item ${index === defaultState && "active"}`}>{link}</div>
                    ))}
                </div>
                <div className="tab-container">
                    {tabState.map((item,index) => (
                        <div key={`tab-${index}`} className="tab-content">
                            <div className="image-wrapper">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="tab-text-content">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <span>USED STACK:</span>
                                <div className="tags">
                                    {item.tags.map((tag,ind)=>(
                                        <span key={`tags-${ind}`}>{tag}</span>
                                    ))}
                                </div>
                                <div className="source">
                                    <a href={`http://www.google.com`}>{item.source}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MyProjects
