const axios = require('axios');


const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjNlOWUyZGQ2ZDkzNjFjN2ZhMzgyZSIsImlhdCI6MTcyMzA3MzAyNywiZXhwIjoxNzIzMDc2NjI3fQ.4W5w2i5uEPZmrqUSfN8sZrvWDX9z-o5RDdv9keQZ_-o'
const createClass = async (className, instructor,description,token) => {
  try {
    const response = await axios.post('http://localhost:3000/api/classes', {
        className,
        instructor,
        description,
    },
    {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    console.log('Registration successful:', response.data);
  } catch (error) {
    console.error('Error registering user:', error.response.data);
  }
};



const newClass ={"className":"intrfasfo to python",
    "instructor":"66b26f5021301273e22738ba",
    "description":"A new Approach for Javascript"
    
    }
// Example usage
createClass(newClass.className , newClass.instructor,newClass.description,token );
