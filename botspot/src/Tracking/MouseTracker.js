import { useEffect, useState, useRef } from 'react';

function MouseTracker() {
  const [mouseData, setMouseData] = useState([]);
  const mouseDataRef = useRef(mouseData); // Use ref to store mouse data for consistency in interval
  mouseDataRef.current = mouseData;

  useEffect(() => {
    // Capture mouse movements
    const handleMouseMove = (event) => {
      const newMouseData = { x: event.clientX, y: event.clientY, timestamp: Date.now() };
      setMouseData((prevData) => [...prevData, newMouseData]);
    };

    // Send the data to the server periodically (e.g., every 20 seconds)
    const interval = setInterval(() => {
      if (mouseDataRef.current.length > 0) {
        // Convert mouse data to the required format for prediction
        const formattedMouseData = mouseDataRef.current.map(data => `m(${data.x},${data.y})`).join('');

        // Send data to the server
        fetch('http://localhost:5000/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ mouse_data: formattedMouseData }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.prediction === 'human') {
              console.log('Prediction: human');
              
            } else {
              console.log('Prediction: bot');
              // Add logic here to trigger popup if bot is detected
              // For example: triggerPopup();
              window.alert('Bot detected!'); // Simple alert popup
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });

        // Clear the mouse data after sending
        setMouseData([]);
      }
    }, 20000); // Send every 20 seconds

    // Attach the mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener and interval on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return null; // No UI rendering
}

export default MouseTracker;
