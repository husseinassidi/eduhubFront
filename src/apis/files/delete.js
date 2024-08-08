const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjNlOWUyZGQ2ZDkzNjFjN2ZhMzgyZSIsImlhdCI6MTcyMzA3NDE1NCwiZXhwIjoxNzIzMDc3NzU0fQ.kTezX9fkksVUWNSZYnkZkhOmnlwcrzm9xx7tIBjwHj4';

const deleteFile = async (id, token) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/files/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('File deletion successful:', response.data);
  } catch (error) {
    console.error('Error deleting file:', error.response ? error.response.data : error.message);
  }
};

const id = "66b4025cdd6d9361c7fa384a";

// Example usage
deleteFile(id, token);

