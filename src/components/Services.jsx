import React from 'react';
import { Featurebox } from './Featurebox';
import fimage1 from '../images/1.jpg'; 
import fimage2 from '../images/2.jpg'; 
import fimage3 from '../images/3.jpg'; 
import fimage4 from '../images/4.jpg'; 

function Services() {
  return (
    <div id='features'>
      <h1>SERVICES</h1>
      <div className='a-container'>
        <Featurebox image={fimage1} title="Waxing" 
        text="Experience silky-smooth skin with our expert waxing services"/>
        <Featurebox image={fimage2} title="Face Treatment" 
        text="Transform your skin with our expertly tailored treatments."/>
        <Featurebox image={fimage3} title="Manicure" 
        text="Our expert manicure services offer for long-lasting nails."/>
        <Featurebox image={fimage4} title="Pedicure"
        text="Revitalize your feet with our luxurious pedicure for lasting comfort and beauty." />
      </div>
    </div>
  );
}

export default Services;
