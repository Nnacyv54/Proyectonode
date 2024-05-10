
const express = require("express")
const router = express.Router()
// Importamos el controlador de usuarios.
const middleware = require("../middleware/verifytoken")
const userController= require("../controllers/userControllers")
// Definir las rutas para el CRUD de usuarios.

router.get("/",middleware,userController.getAllUsers) // Ruta para obtener todos los usuarios
router.post("/",userController.createUser) // Ruta para crear un usuario
router.put("/:id", middleware,userController.updatedUser) // Ruta para actualizar un usuario
router.delete("/:id", middleware,userController.deleteUser) // Ruta para eliminar un usuario
// Exportamos el router para su uso en otras partes
module.exports= router