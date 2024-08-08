// const axios = require('axios');


// const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjNlOWUyZGQ2ZDkzNjFjN2ZhMzgyZSIsImlhdCI6MTcyMzA2ODQ5MSwiZXhwIjoxNzIzMDcyMDkxfQ.-QmCQNhMh5J7yKukJbPC2kFeSLRhEZoVuyjRfLMeszk'
// const readAllClasses = async (className, instructor,description,token) => {
//   try {
//     const response = await axios.get('http://localhost:3000/api/classes', 

//     {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });
//     console.log('readed Registration successful:', response.data);
//   } catch (error) {
//     console.error('Error registering user:', error.response.data);
//   }
// };



// const newClass ={"className":"intrfasfo to python",
//     "instructor":"66b26f5021301273e22738ba",
//     "description":"A new Approach for Javascript"
    
//     }
// // Example usage
// readAllClasses(newClass.className , newClass.instructor,newClass.description,token );
const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjNlOWUyZGQ2ZDkzNjFjN2ZhMzgyZSIsImlhdCI6MTcyMzA2ODQ5MSwiZXhwIjoxNzIzMDcyMDkxfQ.-QmCQNhMh5J7yKukJbPC2kFeSLRhEZoVuyjRfLMeszk';

const readAllClasses = async (token) => {
  try {
    const response = await axios.get('http://localhost:3000/api/classes', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('Read classes successful:', response.data);
  } catch (error) {
    console.error('Error reading classes:', error.response ? error.response.data : error.message);
  }
};

// Example usage
readAllClasses(token);
