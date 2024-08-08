const axios = require('axios');

const loginUser = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3000/api/users/login', {
      email,
      password,
    });
    console.log('Registration successful:', response.data);
  } catch (error) {
    console.error('Error registering user:', error.response.data);
  }
};

// Example usage
loginUser('example12311@email.com', 'password');