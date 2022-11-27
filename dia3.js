/// MY SQL (DIA 3) /// RETOS 

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

// RETO 1 

/* • Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que están apuntados. */

let sql = "SELECT first_name, last_name, title FROM students JOIN marks ON (students.id = marks.student_id) JOIN subjects ON (marks.subject_id = subjects.id)"

connection.query(sql, function (err, result){ // FUNCIONA PERFECTAMENTE!

    if (err){

        console.log(err);
    }else{

        console.log("Mostrando datos");
        console.log(result);
    }
});

// RETO 2

/* • Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten. */

let sql2 = "SELECT first_name, last_name, title FROM teachers JOIN subject_teacher ON (teachers.id = subject_teacher.subject_id) JOIN subjects ON (subject_teacher.subject_id = subjects.id)"

connection.query(sql2, function (err, result){ //FUNCIONA PERFECTAMENTE.

    if (err){

        console.log(err);
    }else{

        console.log("Mostrando datos");
        console.log(result);
    }
});

// RETO 4

/* • Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte.

NOTA: Para que no aparezcan notas repetidas solo debe haber un profesor por asignatura y un grupo por asignatura y profesor. Todos los
retos hay que hacerlos en Workbench y en Node.js con sentencias preparadas.*/
//"SELECT COUNT(students.id), title, teachers.first_name, teachers.last_name FROM students JOIN teams ON (students.group_id = teams.id) JOIN subject_teacher ON (teams.id = subject_teacher.group_id) JOIN teachers ON (subject_teacher.teacher_id = teachers.id) JOIN subjects ON (teachers.subject_id = subjects.id) GROUP BY subjects.title"

/*  let sql3 = "SELECT COUNT(students.id), title, teachers.first_name, teachers.last_name FROM students JOIN teams ON (students.group_id = teams.id) JOIN subject_teacher ON (teams.id = subject_teacher.group_id) JOIN subjects ON (subject_teacher.subject_id = subjects.id) JOIN teachers ON (subject_teacher.teacher_id = teachers.id) GROUP BY subjects.title"; */
/* 
let sql3 = "SELECT COUNT(students.id), subjects.title, teachers.first_name, teachers.last_name FROM students JOIN teams ON (students.group_id = teams.id) JOIN subject_teacher ON (teams.id = subject_teacher.group_id) JOIN teachers ON (subject_teacher.teacher_id = teachers.id) JOIN subjects ON (teachers.subject_id = subjects.id) GROUP BY subjects.title"; */

let sql3 = `SELECT COUNT(students.id), title, teachers.first_name, teachers.last_name FROM students 
JOIN teams ON (students.group_id = teams.id) 
JOIN subject_teacher ON (teams.id = subject_teacher.group_id) 
JOIN teachers ON (subject_teacher.teacher_id = teachers.id) 
JOIN subjects ON (teachers.subject_id = subjects.id) 
GROUP by teachers.id`;
connection.query(sql3, function (err, result){ // 

    if (err){

        console.log(err);
    }else{

        console.log("Mostrando datos");
        console.log(result);
    }
});





