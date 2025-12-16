import React, { useState } from 'react';
import './CSSPart/FlipAuth.css'; 

const FlipAuth = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-wrapper">
      <div className={`card-3d-container ${isFlipped ? 'flip-active' : ''}`}>
        
        {/* Front Side - LOGIN */}
        <div className="card-front">
          <div className="center-wrap">
            <h4 className="heading">Log In</h4>
            <div className="form-group">
              <input type="email" className="form-style" placeholder="Your Email" />
              <i className="input-icon">✉️</i>
            </div>
            <div className="form-group">
              <input type="password" className="form-style" placeholder="Your Password" />
              <i className="input-icon">🔒</i>
            </div>
            <button className="btn">Log In</button>
            <p className="link-text">
              Don't have an account? <a href="#" onClick={handleFlip}>Sign Up</a>
            </p>
          </div>
        </div>

        {/* Back Side - SIGN UP */}
        <div className="card-back">
          <div className="center-wrap">
            <h4 className="heading">Sign Up</h4>
            <div className="form-group">
              <input type="text" className="form-style" placeholder="Full Name" />
              <i className="input-icon">👤</i>
            </div>
            <div className="form-group">
              <input type="email" className="form-style" placeholder="Your Email" />
              <i className="input-icon">✉️</i>
            </div>
            <div className="form-group">
              <input type="password" className="form-style" placeholder="Your Password" />
              <i className="input-icon">🔒</i>
            </div>
            <button className="btn">Join Now</button>
            <p className="link-text">
              Already have an account? <a href="#" onClick={handleFlip}>Log In</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlipAuth;