const jwt = require("jsonwebtoken");
// Almacenamos nuestra clave secreta
const JWT_SECRET =
  "79727ffc6b48c4b76d8252ba586bf588102333db229f21335e9ed2f2e18b2a03";
// Creamos una funcion para generar un token JWT
function generateToken(user) {
  const payload = {
    userId: user._id,
    email: user.email,
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  return token
}
module.exports= {
    generateToken
}