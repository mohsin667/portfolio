import React from 'react'

function Testimonial() {
  return (
    <section className='testimonial-wrapper'>
      <div className="container">
        <div className="testimonial">
            <div className="text-wrapper">
                <div className='subtitle'>Tesimonial</div>
                <h2>
                    <span>what</span><br />
                    <span>People</span><br />
                    says.
                </h2>
            </div>
            <div className="testimonial-cards">
                <div className="card">
                    <div className="content">
                        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="testimonial" />
                        <div className="name-and-des">
                            <h4>Alex Regelman</h4>
                            <p>co-founder, colabrio</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi illum cum aperiam ullam eaque ab obcaecati atque? Eveniet explicabo aspernatur rerum aliquam, at esse.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="testimonial" />
                        <div className="name-and-des">
                            <h4>Alex Regelman</h4>
                            <p>co-founder, colabrio</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi illum cum aperiam ullam eaque ab obcaecati atque? Eveniet explicabo aspernatur rerum aliquam, at esse.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>  
  )
}

export default Testimonial
