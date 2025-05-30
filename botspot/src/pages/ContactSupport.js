import React from 'react';

function ContactSupport() {
    const grayBoxStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.2)', 
        padding: '20px 45px',
        borderRadius: '10px',
        width: '80%',
        margin: '20px auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      };
    
      const headingStyle = {
        fontSize: '76px',
        fontWeight: 'bold',
        color: 'black',
        marginBottom: '20px',
        marginTop: '0',
      };
    
      const textStyle = {
        fontSize: '28px',
        lineHeight: '1.6',
        color: 'black',
      };

  return (
    <div style={grayBoxStyle}>
      <h2 style={headingStyle}>Contact & Support</h2>
      <p style={textStyle}>
        - Our Mission: Revolutionizing online security for Aadhaar services by replacing CAPTCHA with a seamless, passive solution.
      </p>
      <p style={textStyle}>
        - What We Do: We use AI/ML to analyze environmental data and user interactions, ensuring secure access without disrupting the user experience.
      </p>
      <p style={textStyle}>
        - Why It Matters: Our solution improves resident engagement by eliminating CAPTCHA, providing smooth, secure access to UIDAI portals.
      </p>
      <p style={textStyle}>
        - Our Commitment: Enhancing security while adhering to UIDAI’s privacy policies and delivering a user-friendly experience.
      </p>
      <p style={textStyle}>
        - Our Vision: To lead in creating innovative solutions that make digital interactions secure and efficient for everyone.
      </p>
    </div>
  );
}

export default ContactSupport;
