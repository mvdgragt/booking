const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db")

// Middleware
app.use(cors()); // Det här gör att port 300 och port 5000 lyssnar på varandra
app.use(express.json()) // Ge oss tillgång till req.body

// Routes

// get all bookings
app.get("/bookings", async (req,res) => {
try {
    const appointments = await pool.query("SELECT * FROM appointments");
    res.json(appointments.rows)
} catch (err) {
    console.error(err.message)
}
})

// get booking based on room
app.get("/bookings/:location", async(req,res) => {
    try {
        const {location} = req.params
        const appointment = await pool.query("SELECT * FROM appointments WHERE location = $1 ", [location]);
        res.json(appointment.rows)
    } catch (err) {
        console.error(err.message)
    }
    })

//post a booking
app.post("/bookings", async (req,res) => {
    try {
        const {title,location} = (req.body);
        const newBooking = await pool.query("INSERT INTO appointments (title,location) VALUES ($1,$2) RETURNING *",[title,location])
        res.json(newBooking.rows[0])
    } catch (err) {
        console.error(err.message)      
    }
})

// change appointment
app.put("/bookings/:id", async(req,res) => {
    try {
       const { id } = req.params;
       const { title } = req.body;
       const updateBooking = await pool.query("UPDATE appointments SET title = $1 WHERE id=$2", [title, id]
       );
       res.json("appointment title was updated")
    } catch (err) {
        console.error(err.message)
    }
})

// delete appointment

app.delete("/bookings/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const deleteBooking = await pool.query("DELETE FROM appointments Where id = $1", [id])
        res.json("appointment was deleted")
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(5000, () => (
    console.log("Server is starting on port 5000")
));

