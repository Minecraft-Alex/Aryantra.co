const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Google Apps Script URL for form submissions
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxkZkwQOlMD0lYmTvcvpTsAtq72EbWejS6vNr2oVRtKynJbGLxmLOuvVwQU_xVsrJof/exec"; // Google Apps Script URL

// Proxy endpoint for contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received form data:', req.body);
    
    // Forward the request to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    
    // Get the response from Google Apps Script
    const responseText = await response.text();
    console.log('Response from Google Apps Script:', responseText);
    
    // Try to parse as JSON, but fall back to text if needed
    let data;
    try {
      data = JSON.parse(responseText);
      res.status(response.status).json(data);
    } catch (e) {
      // If not JSON, send as text
      res.status(response.status).send(responseText);
    }
  } catch (error) {
    console.error('Error forwarding request:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Proxy server is running' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
}); 