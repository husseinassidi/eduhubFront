const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjNlOWUyZGQ2ZDkzNjFjN2ZhMzgyZSIsImlhdCI6MTcyMzA3MzAyNywiZXhwIjoxNzIzMDc2NjI3fQ.4W5w2i5uEPZmrqUSfN8sZrvWDX9z-o5RDdv9keQZ_-o';

const createFile = async (fileName, ext, path, classId, instructor, token) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/files',
      {
        fileName,
        ext,
        path,
        class: classId,
        instructor,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('File creation successful:', response.data);
  } catch (error) {
    console.error('Error creating file:', error.response ? error.response.data : error.message);
  }
};

const newFile = {
  fileName: "physics1011212",
  ext: "pdf",
  path: "https://drive.google.com/file/d/1shWYuConsFG_TwjY3zupIOrOmXBjGARW/view?usp=drive_link",
  class: "66b2ae2721301273e22038ce",
  instructor: "66b26f5021301273e22038ba",
};

// Example usage
createFile(newFile.fileName, newFile.ext, newFile.path, newFile.class, newFile.instructor, token);
