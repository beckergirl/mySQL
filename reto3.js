// MODULO 4 // RETO 3 // MY SQL

/* Eliminar de la base de datos todas las notas cuya fecha tenga más de 10 años.
• Haz una actualización de los datos en la tabla que corresponda teniendo en cuenta que los profesores
va a poner un 5 a los alumnos cuya nota sea inferior a 5.  */

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


/* Eliminar de la base de datos todas las notas cuya fecha tenga más de 10 años.*/

let sqlDelete = "DELETE FROM marks WHERE date < 2002-10-10";/* "DELETE mark FROM marks WHERE date < 2002-10-10"; */

connection.query(sqlDelete, function (err, result){

    if (err){

        console.log(err);
    }else{

        console.log("Datos Borrados");
        console.log(result);
    }
});



/*• Haz una actualización de los datos en la tabla que corresponda teniendo en cuenta que los profesores
va a poner un 5 a los alumnos cuya nota sea inferior a 5.  */


let sqlUpdate = "UPDATE marks SET mark= 5 WHERE mark < 5"; //Funciona perfectamente! 

connection.query(sqlUpdate, function (err, result){

    if (err){

        console.log(err);
    }else{

        console.log("Dato Actualizado");
        console.log(result);
    }
});
