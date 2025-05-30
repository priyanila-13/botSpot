import React, { useState, useEffect } from 'react';
import './Home.css';

import image1 from '../images/home-1.jpg';
import image2 from '../images/home-2.jpg';
import image3 from '../images/home-3.jpg';
import image4 from '../images/home-4.png';

const images = [image1, image2, image3, image4];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="home">
      <div className="slideshow">
        <img
          src={images[currentImageIndex]}
          alt={`Slideshow image ${currentImageIndex + 1}`}
          className="slideshow-image"
        />
      </div>
    </div>

      {/* Additional content below slideshow */}
      <div className="info-container">
        <div className="info-box">
          <p className="info-text">
            As robots take over more tasks, we must ensure that technology serves humanity, not the other way around.
          </p>
        </div>

        <div className="info-box">
          <h3 className="info-heading">mAadhaar FAQ’s</h3>
          <p className="info-text">
            What is e-Aadhaar? <br />
            e-Aadhaar is a password protected electronic copy of Aadhaar, digitally signed by UIDAI.
          </p>
        </div>

        <div className="info-box">
          <h3 className="info-heading">Why Use This App?</h3>
          <p className="info-text">
            - Seamless Experience: No more CAPTCHA; enjoy smoother access to Aadhaar services.<br />
            - Effortless Security: Advanced AI/ML passively detects and blocks bots, keeping your interactions secure.
          </p>
          <h3 className="info-heading">Advantages of This App</h3>
          <p className="info-text">
            - Enhanced Protection: Robust security against bot attacks, ensuring genuine user access.<br />
            - No CAPTCHA: Passive bot detection improves user experience without interruptions.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;