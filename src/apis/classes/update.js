const axios = require('axios');


const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjNlOWUyZGQ2ZDkzNjFjN2ZhMzgyZSIsImlhdCI6MTcyMzA2ODQ5MSwiZXhwIjoxNzIzMDcyMDkxfQ.-QmCQNhMh5J7yKukJbPC2kFeSLRhEZoVuyjRfLMeszk'
const updateClass = async (id,token) => {
  try {
    const response = await axios.put(`http://localhost:3000/api/classes/${id}`, 
        {
            files:["66b34e68a4d4a7bf1ab0f1ca"]
        },
    {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    console.log('readed Registration successful:', response.data);
  } catch (error) {
    console.error('Error registering user:', error.response.data);
  }
};


const id = "66b3f08bdd6d9361c7fa383e"

// Example usage
updateClass(id,token);
