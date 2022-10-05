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
// app.get("/bookings/:location", async (req, res) => {
//   try {
//   } catch (err) {
//     console.error(err.message);
//   }
// });

//post a booking
app.post("/", async (req, res) => {
  try {
    const { startDate, endDate, title } = req.body;
    const newAppointment = await pool.query(
      "INSERT INTO appointmentslowercase (startDate, endDate, title) VALUES ($1,$2,$3) RETURNING *",
      [startDate, endDate, title]
    );
    res.json(newAppointment);
  } catch (err) {
    console.error(err.message);
  }
});

// change appointment
app.put("/:id", async (req, res) => {

    try {
      const {id} = req.params
      // console.log("id :", id)
    // parseInt(Object.keys(req.body)) = req.params
    const {startDate, endDate, title} =req.body
    // const id = parseInt(Object.keys(req.body))
    // console.log("id :", id)
    // const object = Object.values(req.body)
    // const title = object
    // let {title} = changed
    // console.log(...changed)
    // console.log(title)
    // console.log(startDate)
    // const data = Object.values(req.body)
    // console.log("req.body :", data)
    
    // console.log
    
      // let {id} = req.params;
      // console.log(changed)
      // const data = req.body
      // console.log(data)
      // const {data.title} = data
      // console.log("title: ", title)
      // console.log("appointment updated!")
    //   const {startDate, endDate, title } = req.body;
    //   const id = parseInt(Object.keys(req.body))
    //   console.log(id)

    const updateAppointment = await pool.query("UPDATE appointmentslowercase SET startDate = $1, endDate = $2, title = $3 WHERE id = $4", [startDate, endDate, title, id])
    // console.log(updateAppointment);
    // res.json(updateAppointment)
    res.json(" The appointment was updated")    
  } catch (err) {
    console.error(err.message);
  }
});

// delete appointment

app.delete("/:deleted", async (req, res) => {
  try {
    const { deleted } = req.params;
    console.log(deleted)
    const deletedAppointment = await pool.query(
      "DELETE FROM appointmentslowercase WHERE id=$1",
      [deleted]
    );
    res.json(deletedAppointment);
  } catch (err) {
    console.error("error : ", err.message);
  }
});

app.listen(5000, () => console.log("Server is starting on port 5000"));
