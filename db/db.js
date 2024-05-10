
const mongoose = require("mongoose");

const mongoDBURL=
"mongodb+srv://nancyvsqz:liam12345678@cluster0.iilnpar.mongodb.net/";

function connectDB() {
  return new Promise((res, rej) => {
    
    mongoose
      .connect(mongoDBURL)
      .then(() => {
        console.log("Conexion a la DB establecida correctamente");
        
        res();
      })
      .catch((err) => {
        
        console.error("Error al conectar a la DB ", err);
        rej(err);
      });
  });
}

module.exports = connectDB;