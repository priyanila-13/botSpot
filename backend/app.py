import os
import re
import json
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# Load the trained LSTM model
model = tf.keras.models.load_model('lstm_mouse_movement_classifier.h5')

# Function to extract LSTM features from mouse movements
def extract_lstm_features(mouse_movements):
    x_coords, y_coords = [], []

    # Use regular expressions to find all coordinate entries
    matches = re.findall(r'm\((\d+),(\d+)\)', mouse_movements)

    if not matches:
        return np.zeros((20, 2))  # Return a zero-filled array if no movements

    # Convert matches to integer lists
    for match in matches:
        x, y = map(int, match)
        x_coords.append(x)
        y_coords.append(y)

    # Normalize or pad the sequences to a fixed length for LSTM
    max_length = 20  # This should match the input size expected by the model
    x_coords = x_coords[:max_length] + [0] * (max_length - len(x_coords))
    y_coords = y_coords[:max_length] + [0] * (max_length - len(y_coords))

    # Combine x and y coordinates into a 2D array
    features = np.column_stack((x_coords, y_coords))

    return features

@app.route('/')
def index():
    return "Server is running!"

# Define the prediction route
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the JSON data from the request
        session_data = request.json

        # Extract mouse movements
        mouse_movements = session_data.get('mouse_data', '')

        # Extract LSTM features
        features = extract_lstm_features(mouse_movements)

        # Reshape the features to 3D (1, 20, 2) for prediction
        features = np.expand_dims(features, axis=0)

        # Make prediction using the loaded model
        prediction = model.predict(features)
        predicted_label = np.argmax(prediction, axis=1)[0]

        # Map the label back to human or bot
        label_mapping = {0: 'bot', 1: 'human'}
        result = label_mapping[predicted_label]

        # Return the result as JSON
        return jsonify({'session_id': session_data.get('session_id'), 'prediction': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

# Run the Flask app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)