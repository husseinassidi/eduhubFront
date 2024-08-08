const axios = require('axios');

const registerUser = async (fullname, email, password, role) => {
  try {
    const response = await axios.post('http://localhost:3000/api/users/register', {
      fullname,
      email,
      password,
      role
    });
    console.log('Registration successful:', response.data);
  } catch (error) {
    console.error('Error registering user:', error.response.data);
  }
};

// Example usage
registerUser('adminadmin11', 'example12311@email.com', 'password', { isUser: true, isAdmin: true });
