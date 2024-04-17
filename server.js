// Importamos express y las rutas de usuario y la conexion a la db.
const express = require("express")
const userRoutes = require("./routes/userRoutes")
const connectDb = require("./db/db")
// Creamos una instancia de Express.
const app = express()
const PORT= 3010
// Middleware
app.use(express.json()) // Invocamos al middleware para que parsee los datos del body de las solicitudes en formato JSON.
// Rutas
app.use("/api/users", userRoutes) // Creamos las rutas de usuario en la ruta /api/users
// Iniciamos la db.
connectDb()
// Inicializamos el servidor y lo ponemos en escucha en el puerto que pusimos arriba.
app.listen(PORT,()=>{
    console.log("Servidor corriendo en el puerto: "+ PORT)
})