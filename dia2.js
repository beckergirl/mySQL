// MODULO 4 // RETO 1 Y 2 // MY SQL: DÍA 2
//RETO 1:
/* • Usando el ejemplo de base de datos que tenemos ya implementado desde unidades anteriores, calcular la nota media de
los alumnos de la asignatura 1.
• Calcular el número total de alumnos que hay en el bootcamp.
• Listar todos los campos de la tabla “groups”.
• Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año pasado (no utilices BETWEEN).
• Obtén los datos de todos los estudiantes que estén en el bootcamp este año. Para ello la tabla de estudiantes debe
tener un campo que sea el año de ingreso.
• Calcular el numero de profesores que hay por cada asignatura. */


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

/* 1/ calcular la nota media de los alumnos de la asignatura 1. */

let sql = "SELECT AVG (mark) AS averange_grade FROM marks WHERE subject_id=1"; //LO MUESTRA PERO NO LA CALCULA PORQUE NO TENGO TODAVÍA NPTAS, SÓLO UNA

connection.query(sql, function (err, result){  ////en workbench si // DA NULL

    if (err){

        console.log(err);
    }else{

        console.log("Mostrando datos");
        console.log(result);
    }
});


/* 2/ Calcular el número total de alumnos que hay en el bootcamp. */


let sqlSelect = "SELECT count(id) FROM students"; /// 12

connection.query(sqlSelect, function (err, result){

    if (err){

        console.log(err);
    }else{

        console.log("Mostrando datos");
        console.log(result);
    }
});


/* 3 / Listar todos los campos de la tabla “groups”. */

let sqlSf = "SELECT * FROM codenotch2.groups"; // SI!

connection.query(sqlSf, function (err, result){

    if (err){

        console.log(err);
    }else{

        console.log("Mostrando datos");
        console.log(result);
    }
});


/* 4/ Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año pasado (no utilices BETWEEN). */

let sqlDelete = "DELETE FROM marks WHERE mark > 5 AND date < '2022-01-01'"; // ya FUNCIONA!

connection.query(sqlDelete, function (err, result){ 

    if (err){

        console.log(err);
    }else{

        console.log("Mostrando datos");
        console.log(result);
    }
});

/* 5 / Obtén los datos de todos los estudiantes que estén en el bootcamp este año. Para ello la tabla de estudiantes debe
tener un campo que sea el año de ingreso. */

let sqlSw = "SELECT * FROM students WHERE start_year = 2022"; // FUNCIONA PERFECTAMENTE!

connection.query(sqlSw, function (err, result){

    if (err){

        console.log(err);
    }else{

        console.log("Mostrando datos");
        console.log(result);
    }
});


/* 6 / Calcular el numero de profesores que hay por cada asignatura. */ 

let sqlSc = "SELECT teacher_id, COUNT (*) AS teacher-subject FROM subject_teacher GROUP BY subject_id";//noo
/* SELECT teacher_id, COUNT(*) AS teacher_subject FROM subject_id; */ //ERROR EN LA SINTAXIS

connection.query(sqlSc, function (err, result){

    if (err){

        console.log(err);
    }else{

        console.log("Mostrando datos");
        console.log(result);
    }
});

// MODULO 4 // RETO 1 Y 2 // MY SQL: DÍA 2
//RETO 2:

/* 7 / Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota mayor de 8 y la nota tenga fecha del año pasado. */

let sqlSb = "SELECT mark , student_id FROM marks WHERE student_id BETWEEN 1 AND 20 OR (mark > 8 AND date BETWEEN '2021-01-01' AND '2021-12-31')";

connection.query(sqlSb, function (err, result){ /// FUNCIONA PERFECTAMENTE!

    if (err){

        console.log(err);
    }else{

        console.log("Mostrando datos");
        console.log(result);
    }
});

/* 
• 8 / Obtén la media de las notas que se han dado en el último año por asignatura. */

let sqlAvg = "SELECT AVG (mark) FROM marks WHERE date BETWEEN '2022-01-01' AND '2022-12-31' GROUP BY subject_id";

connection.query(sqlAvg, function (err, result){ /// funciona, da 6,5455 //FUNCIONA PERFECTAMENTE!

    if (err){

        console.log(err);
    }else{

        console.log("Mostrando datos");
        console.log(result);
    }
});

/* 9 / Obtén la media aritmética de las notas que se han dado en el último año por alumno. */

let sqlSavg = "SELECT AVG (mark) FROM marks WHERE date BETWEEN '2022-01-01' AND '2022-12-31' GROUP BY student_id";

connection.query(sqlSavg, function (err, result){ // FUNCIONA PERFECTAMENTE!

    if (err){

        console.log(err);
    }else{

        console.log("Mostrando datos");
        console.log(result);
    }
});