import React from 'react';


function Location() {
  return (
    <div className='location'>
        <h1 className='location-title'>Our Location</h1>
      <div style={{ width: '100%' }}>
        <iframe
          title="Google Map"
          width="100%"
          height="520"
          frameBorder=""
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=520&amp;hl=en&amp;q=Avokat%20Reshat%20Millaku%20Luan%20Haradinaj,%20Prishtine+(Buna%20Beauty%20Center)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
        </iframe>
      </div>
    </div>
  );
}

export default Location;
