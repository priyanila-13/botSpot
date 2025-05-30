import React from 'react';

function AadharServices() {
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
    
      const formTextStyle = {
        fontSize: '28px',
        lineHeight: '1.6',
        color: 'black',
      };
    
      const underlinedText = {
        textDecoration: 'underline',
      };

  return (
    <div style={grayBoxStyle}>
      <h2 style={headingStyle}>Enrollment and update forms</h2>
      <p style={formTextStyle}>
        <span style={underlinedText}>Form 1:</span>(Type : PDF , Doc Size: 0.4 MB)<br />
        For (a) Resident Indian, or (b) Non-Resident Indian having Proof of Address in India (aged 18 years and above)
      </p>
      <p style={formTextStyle}>
        <span style={underlinedText}>Form 3:</span>(Type : PDF , Doc Size: 1.7 MB)<br />
        For (a) Resident Indian child, or (b) Non-Resident Indian child having Proof of Address in India (aged 5 years and above and less than 18 years)
      </p>
      <p style={formTextStyle}>
        <span style={underlinedText}>Form 5:</span>(Type : PDF , Doc Size: 1.0 MB)<br />
        For (a) Resident Indian child, or (b) Non-Resident Indian child having Proof of Address in India (below 5 years of age)
      </p>
      <p style={formTextStyle}>
        <span style={underlinedText}>Form 7:</span>(Type : PDF , Doc Size: 1.2 MB)<br />
        For Resident Foreign National (aged 18 years or above)
      </p>
      <p style={formTextStyle}>
        <span style={underlinedText}>Form 8:</span>(Type : PDF , Doc Size: 1.0 MB)<br />
        For Resident Foreign National (aged below 18 years)
      </p>
    </div>
  );
}

export default AadharServices;
