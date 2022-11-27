// MODULO 4 // RETO 2 // MY SQL

/* 
• Setear todas las notas de los alumnos a ‘0’
• Obtener el nombre y el primer apellido de todos los estudiantes.
• Obtener todos los datos de los profesores.
• Realizar todos los puntos en MysqlWorkbench y luego en Node.js */
/* 

/* CREAR LA CONEXIÓN CON LA BASE DE DATOS */

let mysql2 = require("mysql2");
let connection = mysql2.createConnection(

    {
        host: "localhost",
        user: "root",
        password : "Escaparate82",
        database: "codenotch2"
    }
);


/* CONECTARSE CON LA BBDD: */

connection.connect(function(error){

    if(error){

        console.log(error);

    }else{

        console.log("Conexion correcta.");
    }
});
/* 
• Setear todas las notas de los alumnos a ‘0’ */ /// FUNCIONA PERFECTAMENTE

let sql = "UPDATE marks SET mark = 0";

connection.query(sql, function (err, result){

    if(err){

    console.log(err);

    }else{

        console.log("Campos actualizados");
        console.log(result);
    }    
});

/* • Obtener el nombre y el primer apellido de todos los estudiantes. */ /// FUNCIONA PERFECTAMENTE

let sqlSelect = "SELECT first_name , last_name FROM students";

connection.query(sqlSelect, function (err, result){

      if(err){

    console.log(err);

    }else{

        console.log("Datos mostrados");
        console.log(result);
    }    
});

/* • Obtener todos los datos de los profesores. */ /// FUNCIONA PERFECTAMENTE

let sqlSf = "SELECT * FROM teachers";

connection.query(sqlSf, function (err, result){

    if(err){

        console.log(err);
    
        }else{
    
            console.log("Datos mostrados");
            console.log(result);
        }    
    });

