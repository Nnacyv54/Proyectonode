

const express = require("express");
const router = express.Router();



const authcontroller = require("../controllers/authcontrollers");


const verifyToken= require("../middleware/verifytoken");


router.post("/login", authcontroller.login);


router.post("/logout", verifyToken, authcontroller.logout);

module.exports = router;