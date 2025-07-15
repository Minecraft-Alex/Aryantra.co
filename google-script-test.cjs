// Import the node-fetch library
const fetch = require('node-fetch');

// Google Apps Script URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxkZkwQOlMD0lYmTvcvpTsAtq72EbWejS6vNr2oVRtKynJbGLxmLOuvVwQU_xVsrJof/exec";

// Test data
const testData = {
  name: "Test User",
  email: "test@example.com",
  phone: "1234567890",
  message: "This is a test message from Node.js"
};

// Function to test the connection
async function testGoogleAppsScript() {
  console.log('Sending test data to Google Apps Script...');
  console.log('Data:', testData);
  
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    
    console.log('Response status:', response.status);
    
    const responseText = await response.text();
    console.log('Response text:', responseText);
    
    try {
      const data = JSON.parse(responseText);
      console.log('Response data (JSON):', data);
    } catch (e) {
      console.log('Response is not JSON, using as text');
    }
    
    if (response.ok) {
      console.log('Test successful!');
    } else {
      console.error('Test failed with status:', response.status);
    }
  } catch (error) {
    console.error('Error during test:', error);
  }
}

// Run the test
testGoogleAppsScript(); 