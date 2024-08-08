const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjNlOWUyZGQ2ZDkzNjFjN2ZhMzgyZSIsImlhdCI6MTcyMzA3MzAyNywiZXhwIjoxNzIzMDc2NjI3fQ.4W5w2i5uEPZmrqUSfN8sZrvWDX9z-o5RDdv9keQZ_-o';

const readFile = async (id, token) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/files/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('Read file successful:', response.data);
  } catch (error) {
    console.error('Error reading file:', error.response ? error.response.data : error.message);
  }
};

const id = "66b34e68a4d4a7bf1ab0f1ca";

// Example usage
readFile(id, token);
