const bcrypt = require("bcrypt")


function hashPassword(plainPassword){
    return new Promise((resolve,reect)=>{
        const saltRounds =10;
        bcrypt.hash(plainPassword, saltRounds, (error,hashedPassword)=>{
            if(error){
                PromiseRejectionEvent(new Error("Error al hashear la contraseña"))
            } else {
                resolve(hashedPassword)
            }
        })
    })
}




function comparePassword(plainPassword, hashPassword){
    return new Promise((resolve,reject)=>{
        bcrypt.compare(plainPassword, hashPassword, (error,match)=>{
            if(error){
                reject(new Error("Error al comparar contraseñas"))
            }
            else{
                resolve(match)
            }
        })
    })
}

module.exports={
    hashPassword,
    comparePassword
}