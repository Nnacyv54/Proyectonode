
const express = require("express")
const authRoutes = require("./routes/authroutes")
const userRoutes = require("./routes/userRoutes")
const sessionRoutes = require("./routes/sessionroutes")
const connectDb = require("./db/db")
// Creamos una instancia de Express.
const app = express()
const PORT= 3010
// Middleware
app.use(express.json()) 
// Rutas
app.use("/api/users", userRoutes) // Creamos las rutas de usuario en la ruta /api/users
app.use("/api/auth", authRoutes) // Creamos las rutas de usuario en la ruta /api/users
app.use("/api/session", sessionRoutes) // Creamos las rutas de usuario en la ruta /api/users
// Iniciamos la db.
connectDb()
// Inicializamos el servidor y lo ponemos en escucha en el puerto que pusimos arriba.
app.listen(PORT,()=>{
    console.log("Servidor corriendo en el puerto: "+ PORT)
})