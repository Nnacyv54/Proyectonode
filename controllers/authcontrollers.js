const authService = require("../services/authservice");
const AuthToken= require("../models/Authtoken");
const bcryptService= require("../services/bcryptService");
const User = require("../models/user");


function login(req,res){
  const {email,contraseña} = req.body;

  User.findOne({email: email})
  .then((user)=>{
    if (!user){
      return res.status(401).json({message: "Credenciales Invalidas"})
    }


    bcryptService.comparePassword(contraseña, user.contraseña)
    then((match)=>{
      if(!match){
        return res.status(401).json({message:"Credenciales Invalidas"})
      }



      const token = authService.generateToken(user)


      AuthToken.create({userId: USER_Id, token})
      .then(()=>{
        res.json({token})
      })
      .catch((error)=>{
        console.error(error);
        res.status(500).json({ message: "Error al iniciar sesion"})
      })
    }) .catch((error)=>{
      console.error(error);
      res.status(500).json({ message: "Error al iniciar sesion"})
    })
  }) .catch((error)=>{
    console.error(error);
    res.status(500).json({ message: "Error al iniciar sesion"})
  })
}



function logout() {
  const token = req.header.autorization.token


  AuthToken.findByIdAndDelete({token})
  .then(()=>{
    res.status(200).json({ message: "Sesion cerrada exitosamente"})
  })
  .catch((error)=>{
    console.error(error)
    res.status(500).json({ message: "Error al iniciar sesion"})
  })
}
module.exports={
    login,
    logout
}