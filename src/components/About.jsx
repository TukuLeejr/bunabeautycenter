import React from 'react'
import aboutimage from '../images/about.png'

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt='' />
        </div>
            <div className='about-text'>
                <h1>ABOUT US</h1>
                <p>Welcome to Buna Beauty Center, nestled in the heart of the city.
                   We specialize in impeccable waxing, exquisite nail care, and rejuvenating face treatments.
                    At Buna Beauty Center, we believe in enhancing your natural beauty with precision and care. 
                    Step into our oasis where relaxation meets expertise, and let us pamper you with our tailored services. 
                    Discover the art of self-care with us, where every visit leaves you feeling refreshed and radiant.</p> 
            </div>
    </div>
  )
}

export default About