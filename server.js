import express, { json } from "express";
import cors from "cors";
import db from "./db.js"; // ✅ MySQL connection

const app = express();
const PORT = 5000;

app.use(cors());
app.use(json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend running!");
});

// ====================== STUDENTS ROUTES ======================

// Get all students
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, rows) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(rows);
  });
});

// Get one student by ID
app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM students WHERE id = ?", [id], (err, rows) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (rows.length === 0) return res.status(404).json({ error: "Student not found" });
    res.json(rows[0]);
  });
});

// Add student
app.post("/students", (req, res) => {
  const { name, age, major } = req.body;
  if (!name || !age || !major) return res.status(400).json({ error: "All fields are required" });

  db.query("INSERT INTO students (name, age, major) VALUES (?, ?, ?)", [name, age, major], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.status(201).json({ id: result.insertId, name, age, major });
  });
});

// Update student
app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, major } = req.body;
  db.query("UPDATE students SET name = ?, age = ?, major = ? WHERE id = ?", [name, age, major, id], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Student not found" });
    res.json({ message: "Student updated successfully" });
  });
});

// Delete student
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM students WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Student not found" });
    res.json({ message: "Student deleted successfully" });
  });
});

// ====================== GRADES ROUTES ======================

// Get all grades
app.get("/grades", (req, res) => {
  db.query("SELECT * FROM grades", (err, rows) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(rows);
  });
});

// Get one grade by ID
app.get("/grades/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM grades WHERE id = ?", [id], (err, rows) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (rows.length === 0) return res.status(404).json({ error: "Grade not found" });
    res.json(rows[0]);
  });
});

// Add grade
app.post("/grades", (req, res) => {
  const { course, score, info } = req.body;
  if (!course || !score || !info) return res.status(400).json({ error: "All fields are required" });

  db.query("INSERT INTO grades (course, score, info) VALUES (?, ?, ?)", [course, score, info], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.status(201).json({ id: result.insertId, course, score, info });
  });
});

// Update grade
app.put("/grades/:id", (req, res) => {
  const { id } = req.params;
  const { course, score, info } = req.body;
  db.query("UPDATE grades SET course = ?, score = ?, info = ? WHERE id = ?", [course, score, info, id], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Grade not found" });
    res.json({ message: "Grade updated successfully" });
  });
});

// Delete grade
app.delete("/grades/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM grades WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Grade not found" });
    res.json({ message: "Grade deleted successfully" });
  });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
