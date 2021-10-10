const mysql = require('mysql');
const conexion= mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'Password@123',
    port:3306,
    database:'db_basico'
})

conexion.connect((error)=>{
    if(error){
        console.log("Ha ocurrido un error: "+error)
    }else{
        console.log("Se conecto correctamente a la base de datos")

    }
})

module.exports= conexion;
