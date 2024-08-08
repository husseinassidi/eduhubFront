const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjNlOWUyZGQ2ZDkzNjFjN2ZhMzgyZSIsImlhdCI6MTcyMzA2ODQ5MSwiZXhwIjoxNzIzMDcyMDkxfQ.-QmCQNhMh5J7yKukJbPC2kFeSLRhEZoVuyjRfLMeszk';

const readAllFiles = async (token) => {
  try {
    const response = await axios.get('http://localhost:3000/api/files', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('Read files successful:', response.data);
  } catch (error) {
    console.error('Error reading files:', error.response ? error.response.data : error.message);
  }
};

// Example usage
readAllFiles(token);
