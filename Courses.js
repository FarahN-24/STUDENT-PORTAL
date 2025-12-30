import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Courses() {
  const navigate = useNavigate();
  const [gradesFromDB, setGradesFromDB] = useState([]);

  const allCourses = [
    { name: "BIOINFORMATICS", info: "Study of biological data using computational tools." },
    { name: "MOLECULAR BIOLOGY", info: "Explores molecular mechanisms of DNA, RNA, and proteins." },
    { name: "MEDICAL TECHNOLOGY", info: "Covers diagnostic tools and lab techniques in healthcare." },
    { name: "BIOMEDICAL ENGINEERING", info: "Applies engineering principles to medical and biological problems." },
    { name: "CHEMISTRY", info: "Midterm Exam" },
    { name: "STRUCTURAL BIOCHEMISTRY", info: "Focuses on the structure and function of biomolecules." },
    { name: "CLINICAL BIOCHEMISTRY", info: "Studies biochemical processes in clinical and medical settings." },
    { name: "MICROBIOLOGY", info: "Explores microorganisms and their impact on health and environment." }
  ];

  useEffect(() => {
    axios.get("http://localhost:5000/grades")
      .then(res => setGradesFromDB(res.data))
      .catch(err => console.error("Error fetching grades:", err));
  }, []);

  const gradeMap = {};
  gradesFromDB.forEach(g => {
    gradeMap[g.course.trim().toLowerCase()] = g;
  });

  const handleLogoClick = (courseName) => {
    localStorage.setItem(
      "selectedCourses",
      JSON.stringify([courseName.trim().toLowerCase()])
    );
    navigate("/dynamicRecipeCourse/Grades");
  };

  const getGradeLetter = (score) => {
    if (score >= 95) return "A";
    if (score >= 85) return "B";
    if (score >= 75) return "C";
    if (score >= 65) return "D";
    return "F";
  };

  const registeredCourses = allCourses.filter(c => gradeMap[c.name.trim().toLowerCase()]);
  const unregisteredCourses = allCourses.filter(c => !gradeMap[c.name.trim().toLowerCase()]);

  return (
    <div style={{ padding: "40px", fontFamily: "Segoe UI, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#000080", marginBottom: "30px" }}>
        📚 Courses Overview
      </h2>

      {/* Registered Courses */}
      <h3 style={{ color: "#2e7d32", marginBottom: "15px" }}>✅ Registered Courses</h3>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: "#f9f9f9",
        border: "2px solid #6a0dad",
        borderRadius: "8px",
        marginBottom: "40px"
      }}>
        <thead>
          <tr style={{ backgroundColor: "#6a0dad", color: "white" }}>
            <th>Course</th>
            <th>Description</th>
            <th>Grade</th>
            <th>Go to Grades</th>
          </tr>
        </thead>
        <tbody>
          {registeredCourses.map((course, idx) => {
            const normalized = course.name.trim().toLowerCase();
            const gradeData = gradeMap[normalized];
            const gradeLetter = getGradeLetter(gradeData.score);

            return (
              <tr key={idx}>
                <td>{course.name}</td>
                <td>{course.info}</td>
                <td style={{ fontWeight: "bold", textAlign: "center" }}>{gradeLetter}</td>
                <td style={{ textAlign: "center" }}>
                  <button 
                    onClick={() => handleLogoClick(course.name)} 
                    style={{
                      backgroundColor: "#6a0dad",
                      color: "#fff",
                      border: "none",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      cursor: "pointer",
                      fontSize: "18px"
                    }}
                  >
                    🎓
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Unregistered Courses */}
      <h3 style={{ color: "#d84315", marginBottom: "15px" }}>❌ Unregistered Courses</h3>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: "#f9f9f9",
        border: "2px solid #6a0dad",
        borderRadius: "8px"
      }}>
        <thead>
          <tr style={{ backgroundColor: "#6a0dad", color: "white" }}>
            <th>Course</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {unregisteredCourses.map((course, idx) => (
            <tr key={idx}>
              <td>{course.name}</td>
              <td>{course.info}</td>
              <td style={{ color: "#777", textAlign: "center" }}>ℹ️ Not registered yet</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

