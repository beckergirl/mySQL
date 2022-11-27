/* • Modifica alguna de las tablas creadas para añadir columnas y otra tabla para borrar columnas.
• Elimina una de las tablas creadas de forma permanente.
• Realizar los dos últimos puntos en MysqlWorkbench y luego en Node.js */

// MODULO 4 // RETO 1 

// MY SQL

/* CREAR LA CONEXIÓN CON LA BASE DE DATOS */

let mysql2 = require("mysql2");
let connection = mysql2.createConnection(

    {
        host: "localhost",
        user: "root",
        password : "Escaparate82",
        database: "codenotch"
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

// CREAR TABLAS DESDE MYSQL *funciona perfectamente 

/* let sql = "CREATE TABLE codenotch.cafetería (id INT AUTO_INCREMENT PRIMARY KEY, asignaturas VARCHAR(20), notas INT)";

connection.query(sql, function (err, result){

    if(err){
    console.log(err);
    }else{

        console.log("Tabla creada");
        console.log(result);
    }
}); */

//// OPERACIONES CRUD //// INSERT introducir una columna nueva a la tabla asignaturas

/* INSERT INTO codenotch.asignaturas(Título) VALUES ("MODULO 0); */

/* let sqlInto = "INSERT INTO codenotch.asignaturas (Título) VALUES (\"labores\")"; //se ha creado correctamente

connection.query(sqlInto, function (err, result){

    if (err){

        console.log("Dato Insertado");
        console.log(result);
    }
});  */



// DELETE FROM codenotch.asignaturas;  //BORRAR SIEMPRE CON UN WHERE ¡siempre! 
//ahora voy a crear las tablas que he creado enteras que no tienen info ni foreing keys del tirón.

/* 
let sqlDelete = "DELETE FROM codenotch.TablaparaBorrar";

connection.query(sqlDelete, function (err, result){

    if (err){

        console.log(err);    // pone que la ha borrado y conexión correcta pero en Workbench sigue apareciendo (vacía)
    }else{

        console.log("Datos Borrados");
        console.log(result);
    }
});  */
/* 
¿Cómo eliminar una tabla en SQL Server en base a código?
Para eliminar una tabla de una base de datos tenemos la sentencia DROP TABLE.  */

let sqlDelete = "DROP TABLE codenotch.TablaparaBorrar";

connection.query(sqlDelete, function (err, result){ /// con esta fórmula si me ha borrado TablaparaBorrar

    if (err){

        console.log(err);
    }else{

        console.log("Datos Borrados");
        console.log(result);
    }
}); 

/// ¿Cómo borrar una columna en SQL?
/* Para hacer esto, usa la declaración ALTER TABLE DROP COLUMN de la siguiente manera:
ALTER TABLE table_name DROP COLUMN column_name; */


