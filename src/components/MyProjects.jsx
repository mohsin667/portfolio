import React from 'react'
import {tabData} from "../mock"
function MyProjects() {
  return (
    <section className='my-project'>
        <div className="container">
            <h2>My Projects</h2>
            <div className="tabs">
                <div className="tabs-item active">All</div>
                <div className="tabs-item">Websites</div>
                <div className="tabs-item">Landing Pages</div>
            </div>
            <div className="tab-container">
                {tabData.map((item,index) => (
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
