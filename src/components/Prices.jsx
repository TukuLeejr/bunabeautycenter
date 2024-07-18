import React from 'react';


function Prices() {
  return (
    <div id='prices' className='prices-section'>
      <div className='pr-heading'>
        <h1>OUR <span>PRICES</span></h1>
      </div>
      <div className='price-list'>
        <div className='price-item'>
          <h3>Waxing</h3>
          <p>Bikini 4€</p>
          <p>Full Legs 10€</p>
          <p>Half the Leg 2-5€</p>
          <p>Arms 5€</p>
          <p>Armpits 2€</p>
          <p>Face 5€</p>
          <p>Mustache 1€</p>
          <p>Whole Body Wax 20€</p>
        </div>
        <div className='price-item'>
          <h3>Facial Treatment</h3>
          <p>Starting from 25€</p>
        </div>
        <div className='price-item'>
          <h3>Nails</h3>
          <p>Nail Planting 15€</p>
          <p>Nail Filling 10€</p>
          <p>Pedicure 10€</p>
          <p>Gel Removal 5€</p>
        </div>
      </div>
    </div>
  );
}

export default Prices;
