import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentImage from "../assests/StudentImage.png";

export default function Profile() {
  const [student, setStudent] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ name: "", age: "", major: "" });

  useEffect(() => {
    axios.get("http://localhost:5000/students/1")
      .then(res => {
        setStudent(res.data);
        setFormData(res.data);
      })
      .catch(err => console.error("Error fetching student:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    axios.put(`http://localhost:5000/students/${student.id}`, formData)
      .then(() => {
        setStudent(formData);
        setEditing(false);
      })
      .catch(err => console.error("Error updating student:", err));
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",            // ✅ full height center
      backgroundColor: "#2e003e",    // ✅ dark purple background
      fontFamily: "Segoe UI, sans-serif"
    }}>
      <div style={{
        width: "60%",                // ✅ medium length (not too wide)
        backgroundColor: "#fff",     // ✅ white card
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        overflow: "hidden",
        border: "3px solid #2e003e"
      }}>
        {/* Header */}
        <div style={{
          backgroundColor: "#2e003e",
          padding: "40px",
          textAlign: "center"
        }}>
          <img src={StudentImage} alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "5px solid #fff",
              objectFit: "cover"
            }} />
          <h2 style={{
            color: "#fff",
            marginTop: "20px",
            fontSize: "28px",
            letterSpacing: "1px"
          }}>Student Profile</h2>
        </div>

        {/* Info Section */}
        <div style={{ padding: "40px", fontSize: "18px", color: "#2e003e" }}>
          {!editing ? (
            <>
              <div style={{ marginBottom: "20px" }}>
                <strong>Name:</strong> {student?.name}
              </div>
              <div style={{ marginBottom: "20px" }}>
                <strong>Student ID:</strong> {student?.id}
              </div>
              <div style={{ marginBottom: "20px" }}>
                <strong>Age:</strong> {student?.age}
              </div>
              <div style={{ marginBottom: "20px" }}>
                <strong>Major:</strong> {student?.major}
              </div>
              <button onClick={() => setEditing(true)} style={{
                backgroundColor: "#2e003e",
                color: "#fff",
                padding: "12px 24px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px"
              }}>Edit</button>
            </>
          ) : (
            <>
              <label style={{ display: "block", marginBottom: "10px" }}>Name:</label>
              <input name="name" value={formData.name} onChange={handleChange}
                style={{ width: "100%", padding: "12px", marginBottom: "20px", fontSize: "16px" }} />

              <label style={{ display: "block", marginBottom: "10px" }}>Age:</label>
              <select name="age" value={formData.age} onChange={handleChange}
                style={{ width: "100%", padding: "12px", marginBottom: "20px", fontSize: "16px" }}>
                {[18, 19, 20, 21, 22, 23, 24, 25].map(a => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>

              <label style={{ display: "block", marginBottom: "10px" }}>Major:</label>
              <select name="major" value={formData.major} onChange={handleChange}
                style={{ width: "100%", padding: "12px", marginBottom: "30px", fontSize: "16px" }}>
                <option value="Biomedical Science">Biomedical Science</option>
                <option value="Biology">Biology</option>
                <option value="Medical Technology">Medical Technology</option>
              </select>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={handleSave} style={{
                  backgroundColor: "#2e003e",
                  color: "#fff",
                  padding: "12px 24px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}>Save</button>
                <button onClick={() => setEditing(false)} style={{
                  backgroundColor: "#ccc",
                  color: "#333",
                  padding: "12px 24px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}>Cancel</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
