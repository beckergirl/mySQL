// MODULO 4 // RETO 1 

// MY SQL

/* CREAR LA CONEXIÓN CON LA BASE DE DATOS */

let mysql = require("mysql2");
let connection = mysql.createConnection(

    {
        host: "localhost",
        user: "root",
        password : "pasword",
        database: "dia1"
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

/* Cerrar una conexión (no recomendado): connection.end(); */

// CREAR TABLAS DESDE MYSQL

let sql = "CREATE TABLE direccion (id INT AUTO_INCREMENT PRIMARY KEY, calle VARCHAR(200), numero INT, ciudad VARCHAR(60))";

connection.query(sql, function (err, result){

    if(err){
    console.log(err);
    }else{

        console.log("Tabla creada");
        console.log(result);
    }
});

/* BORRAR TABLAS  */

let sqlborrar = "DROP TABLE tabla2";
connection.query(sql, function(err,result){

    if (err) throw err;
    console.log("Tabla eliminada");
});

//// OPERACIONES CRUD //// INSERT

/* INSERT INTO Usurario (nombre, edad) VALUES ("Jose", 30); */

let sqlInto = "INSERT INTO Usuario (nombre, edad) VALUES (\"Jose\", 30)";

connection.query(sqlInto, function (err, result){

    if (err){

        console.log("Dato Insertado");
        console.log(result);
    }
});

//// OPERACIONES CRUD /// UPDATE

/* UPDATE Usurario SET edad = 40 */

let sqlUpdate = "UPDATE Usuario SET edad= 40";

connection.query(sqlUpdate, function (err, result){

    if (err){

        console.log(err);
    }else{

        console.log("Dato Actualizado");
        console.log(error);
    }
});

//// OPERACIONES CRUD /// DELETE

/* DELETE FROM Usurario; */

let sqlDelete = "DELETE FROM Usuario";

connection.query(sqlDelete, function (err, result){

    if (err){

        console.log(err);
    }else{

        console.log("Datos Borrados");
        console.log(result);
    }
});

//// OPERACIONES CRUD /// SELECT

/* SELECT nombre FROM Usurario; */

let sqlSelect = "SELECT nombre FROM Usuario";

connection.query(sqlSelect, function (err, result){

    if (err){

        console.log(err);
    }else{

        console.log("Tabla Creada");
        console.log(result);
    }
});

//// CONDICIONALES CON SQL /// WHERE

/* SELECT nombre FROM Usurario WHERE edad > 30; */

let sqlWhere = "SELECT nombre FROM Usuario WHERE edad > 30";

connection.query(sqlWhere, function (err, result){

    if (err){

        console.log(err);
    }else{

        console.log("Tabla Creada");
        console.log(result);
    }
});
