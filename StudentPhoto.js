// src/components/StudentPhoto.js
import React from 'react';
import studentImg from '../assests/StudentImage.png'; // correct path from components to assets

const StudentPhoto = () => {
  return (
    <img
      src={studentImg}
      alt="Student"
      className="student-photo"
    />
  );
};

export default StudentPhoto;
