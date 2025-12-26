import React from 'react';
import './CSSPart/NetflixLogo.css';

const NetflixLogo = () => {
   return (
    <div className="logo-container">
      <div className="logo-wrapper">
        {/* The four outer glowing segments */}
        <div className="segment top-left"></div>
        <div className="segment top-right"></div>
        <div className="segment bottom-left"></div>
        <div className="segment bottom-right"></div>
        
        {/* The central dark triangle */}
        <div className="center-triangle"></div>
      </div>
    </div>
  );
};

export default NetflixLogo;