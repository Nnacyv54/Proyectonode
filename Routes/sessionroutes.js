

const express = require("express")
const router = express.Router()



const sessioncontrollers = require("../controllers/sessioncontrollers");
const verifyToken = require("../middleware/verifytoken");


router.get("/currentUser", verifyToken, sessioncontrollers.getCurrentUser);


module.exports = router;
