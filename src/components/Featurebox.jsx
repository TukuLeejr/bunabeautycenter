import React from 'react';

export const Featurebox = (props) => {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image} alt='' />
      </div>
      <div className='a-b-text'>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <div className='a-b-text-2'>
        <h2>{props.title2}</h2>
        <p>{props.text}</p>
      </div>
      <div className='a-b-text-3'>
        <h2>{props.title3}</h2>
        <p>{props.text}</p>
      </div>
      <div className='a-b-text-4'>
        <h2>{props.title4}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
