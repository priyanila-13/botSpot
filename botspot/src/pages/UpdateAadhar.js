import React, { useState } from 'react'; 
import fingerprintImage from '../images/aadhar-1.png'; 

function UpdateAadhar() {
  const [honeypot, setHoneypot] = useState(''); 
  const [aadharNumber, setAadharNumber] = useState(''); 
  const [mobileNumber, setMobileNumber] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if honeypot field is filled
    if (honeypot !== '') {
      console.log("Bot detected!"); 
      return;
    }


    console.log("Form submitted with Aadhar number:", aadharNumber, "and Mobile number:", mobileNumber);
  };

  return (
    <form className="login-container" style={styles.container} onSubmit={handleSubmit}>
      <img src={fingerprintImage} alt="Fingerprint" style={styles.image} />
      <h2 style={styles.heading}>Update Your Aadhar</h2>
      <input 
        type="text" 
        placeholder="Enter Aadhar Number" 
        value={aadharNumber}
        onChange={(e) => setAadharNumber(e.target.value)}
        style={styles.input} 
        required
      />
      <input 
        type="text" 
        placeholder="Enter Mobile Number" 
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        style={styles.input} 
        required
      />

      <input 
        type="text" 
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={styles.honeypot} 
        tabIndex="-1" 
        autoComplete="off" 
      />

      <button type="submit" style={styles.button}>Login</button>
    </form>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  image: {
    padding: '30px',
    width: '390px',
    marginBottom: '5px',
  },
  heading: {
    fontSize: '44px',
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: '20px',
  },
  input: {
    padding: '20px',
    fontSize: '16px',
    marginBottom: '20px',
    width: '500px', 
  },
  button: {
    padding: '20px 20px',
    fontSize: '30px',
    backgroundColor: '#10056c', 
    color: '#fff', 
    border: 'none',
    borderRadius: '35px',
    cursor: 'pointer',
    width: '200px',
  },
  honeypot: {
    position: 'absolute', 
    left: '-9999px',
    top: '0',
    width: '1px', 
    height: '1px',
    opacity: 0, 
  }
};

export default UpdateAadhar;