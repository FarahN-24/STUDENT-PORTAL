import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default function Grades() {
  const [gradesFromDB, setGradesFromDB] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("selectedCourses");
    if (stored) {
      setSelectedCourses(JSON.parse(stored));
    }

    axios.get("http://localhost:5000/grades")
      .then(res => setGradesFromDB(res.data))
      .catch(err => console.error("Error fetching grades:", err));
  }, []);

  const gradeMap = {};
  gradesFromDB.forEach(g => {
    gradeMap[g.course.trim().toLowerCase()] = g;
  });

  const getGradeLetter = (score) => {
    if (score >= 95) return "A";
    if (score >= 85) return "B";
    if (score >= 75) return "C";
    if (score >= 65) return "D";
    return "F";
  };

  // ✅ Pie chart data (distribution of grades)
  const gradeCounts = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  gradesFromDB.forEach(g => {
    const letter = getGradeLetter(g.score);
    gradeCounts[letter]++;
  });

  const pieData = {
    labels: ["A", "B", "C", "D", "F"],
    datasets: [
      {
        data: Object.values(gradeCounts),
        backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#FF5722", "#9E9E9E"]
      }
    ]
  };

  // ✅ Line chart data (GPA progression across 4 years)
  const lineData = {
    labels: ["Year 1", "Year 2", "Year 3", "Year 4"],
    datasets: [
      {
        label: "GPA Progression",
        data: [3.2, 3.4, 3.6, 3.8], // Example values
        borderColor: "purple",
        backgroundColor: "rgba(106, 13, 173, 0.2)",
        fill: true
      }
    ]
  };

  const finalGPA = 3.5;

  return (
    <div style={{ padding: "40px", fontFamily: "Segoe UI, sans-serif" }}>
      {/* Existing Layout */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Grades Table */}
        <div style={{ width: "65%" }}>
          <h1 style={{ textAlign: "center", color: "#000080", marginBottom: "30px" }}>
            📊 Selected Registered Courses & Grades
          </h1>

          {selectedCourses.length === 0 ? (
            <p style={{ textAlign: "center", color: "crimson" }}>
              No course selected. Please go to the Courses page and choose a registered course.
            </p>
          ) : (
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "#f3e5f5",
              border: "2px solid #6a0dad",
              borderRadius: "8px"
            }}>
              <thead>
                <tr style={{ backgroundColor: "#6a0dad", color: "white" }}>
                  <th>Course</th>
                  <th>Score</th>
                  <th>Grade</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {selectedCourses.map((courseName, idx) => {
                  const normalized = courseName.trim().toLowerCase();
                  const course = gradeMap[normalized];

                  return (
                    <tr key={idx}>
                      <td>{courseName.toUpperCase()}</td>
                      <td>{course ? course.score : "—"}</td>
                      <td>{course ? getGradeLetter(course.score) : "—"}</td>
                      <td>
                        {course ? (
                          course.score > 90 ? (
                            <span style={{ color: "#2e7d32", fontWeight: "bold" }}>
                              🌟 Excellent! You scored {course.score}. Keep up the excellence!
                            </span>
                          ) : (
                            <span style={{ color: "#333" }}>
                              💪 Your score is {course.score}. Keep going strong!
                            </span>
                          )
                        ) : (
                          <span style={{ color: "#777", fontStyle: "italic" }}>
                            Grades for this course are not available yet.
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* Grade Scale */}
        <div style={{
          width: "30%",
          backgroundColor: "#fff",
          border: "2px solid #6a0dad",
          borderRadius: "8px",
          padding: "20px"
        }}>
          <h3 style={{ color: "#6a0dad", textAlign: "center", marginBottom: "20px" }}>
            🎯 Grade Scale
          </h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#eee", fontWeight: "bold" }}>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Grade</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Score Range</td>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: "10px" }}>A</td><td style={{ padding: "10px" }}>95+</td></tr>
              <tr><td style={{ padding: "10px" }}>B</td><td style={{ padding: "10px" }}>85–94</td></tr>
              <tr><td style={{ padding: "10px" }}>C</td><td style={{ padding: "10px" }}>75–84</td></tr>
              <tr><td style={{ padding: "10px" }}>D</td><td style={{ padding: "10px" }}>65–74</td></tr>
              <tr><td style={{ padding: "10px" }}>F</td><td style={{ padding: "10px" }}>Below 65</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Section */}
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
        <div style={{ width: "40%" }}>
          <h3 style={{ textAlign: "center", color: "#6a0dad" }}>📈 GPA Progression</h3>
          <Line data={lineData} />
        </div>
        <div style={{ width: "40%" }}>
          <h3 style={{ textAlign: "center", color: "#6a0dad" }}>🍩 Grade Distribution</h3>
          <Pie data={pieData} />
        </div>
      </div>

      {/* GPA Record */}
      <div style={{
        marginTop: "40px",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "bold",
        color: "#000080"
      }}>
        🎓 Final GPA Record: {finalGPA}
      </div>
    </div>
  );
}
