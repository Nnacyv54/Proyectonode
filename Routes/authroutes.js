

const express = require("express");
const router = express.Router();



const authcontroller = require("../controllers/authcontrollers");


router.post("/login", authcontroller.login);
router.get("logout", authcontroller.logout);

module.exports = router;