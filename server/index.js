const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors()); // Det här gör att port 300 och port 5000 lyssnar på varandra
app.use(express.json()); // Ge oss tillgång till req.body

// Routes

// get all bookings
app.get("/", async (req, res) => {
  try {
    const appointments = await pool.query("SELECT * FROM appointments");
    res.json(appointments.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get booking based on room
app.get("/bookings/:location", async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
  }
});

//post a booking
app.post("/", async (req, res) => {
  try {
    console.log(req.body)
    const { startDate, endDate, title} = req.body
    const newAppointment = await pool.query("INSERT INTO appointmentslowercase (startDate, endDate, title) VALUES ($1,$2,$3) RETURNING *", [startDate, endDate, title]);
    res.json(newAppointment)
  } catch (err) {
    console.error(err.message);
  }
});

// change appointment
app.put("/bookings/:id", async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
  }
});

// delete appointment

app.delete("/bookings/:id", async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => console.log("Server is starting on port 5000"));
