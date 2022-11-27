

class Notas {

    constructor(student_id, subject_id, mark){

        this.student_id = student_id;
        this.subject_id = subject_id;
        this.mark = mark;
      
    }
}


function getNotas(){ /// 

    let formulario = document.getElementById("notas");
    formulario.innerHTML = " "; /// pedir info del front para rellenar formulario (usuario)

    let id = document.getElementById("student_id").value; //posicion para acceder a los profesionales.
    console.log(id);

    if(id){

        const url = "http://localhost:4000/notas?id=" + id;

    let param =
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET" //nunca BODY!! 
    }
    console.log(url);

    fetch(url, param)
    .then(function(data){

        return data.json();
    })
    .then(function(data){    

        if (!data.error){      
                     
        console.log(data);

        // añadir bucle
        data.forEach(function(data){  

        formulario.innerHTML +=  `<p> 
                                 <b>Id Estudiante:</b> ${data.student_id}<br>
                                 <b>Id Asignatura:</b> ${data.subject_id}<br>
                                 <b>Nota:</b> ${data.mark}<br>
                                 </p>`
                                                        
        })
        }else{

            showToast("ERROR: " +  data.mensaje, "bg-danger")
        }
    })
    .catch(function(error)
    {
        console.log(error);
    })
    } else {

        let url = "http://localhost:4000/notas";

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET" /// jamás BODY!
    }

    fetch(url, param)
    .then(function(data)
    {
        return data.json();
    })
    .then(function(result){     

        if(!result.error){        

       result.forEach(function (notas){               
                                 
        formulario.innerHTML += `<p><b>Id Alumno:</b> ${notas.student_id}<br>  
                                 <b>Id Asignatura:</b> ${notas.subject_id}<br>
                                 <b>Nota:</b> ${notas.mark}<br>
                                 <b>Id:</b> ${notas.id}<br>
                                 </p>`
    })                                                       
        }else{
            showToast("ERROR: " +  result.mensaje, "bg-danger")
        }
    })
    .catch(function(error){

        console.log(error);
        
    })
    }
    
}

function postNotas(){   // post: añadir datos. (apuntes clase)  //

    let notas = new Notas (document.getElementById("student_id").value,
                           document.getElementById("subject_id").value,
                           document.getElementById("mark").value);
    console.log(notas);
    
    let url = "http://localhost:4000/notas";

    if (validar(notas)){

        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(notas),
                method: "POST"
            }

        fetch(url, param)
        .then(function(data)
        {
            return data.json();
        })
        .then(function(result){

            if (!result){

                showToast("ERROR: Error al insertar el dato" , "bg-danger");

            }else{

                showToast("Nota creada con id: " + result, "bg-success");
            }
            console.log(result);
        })
        .catch(function(error)
        {
            showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
            console.log(error);
        })
    }
}

function putNotas(){  // put: MODIFICAR datos. // 

    let putStudents_id = document.getElementById("student_id").value;
    let putSubjects_id = document.getElementById("subject_id").value;
    let idNota      = document.getElementById("mark_id").value;
    let nota     = document.getElementById("mark").value;



    if(putStudents_id == ""){

        putStudents_id = null;
    }
    if(putSubjects_id == ""){

        putSubjects_id = null;
    }
    if(idNota  == ""){

        idNota  = null;
    }
    if(nota  == ""){

        nota  = null;
     }
     let newNota={
         student_id: putStudents_id,
         subject_id : putSubjects_id, 
         mark: nota, 
         id:idNota
     }
    console.log(newNota);
    

 let url = "http://localhost:4000/notas"; 

 let param = 
 {
     headers: {"Content-type": "application/json; charset= UTF-8"},
     body: JSON.stringify(newNota),
     method: "PUT"
 }
 if(nota != ""){

      fetch(url, param)
     .then((data)=> {

         return data.json();
     })
     .then((data) => {

         console.log(data);
         showToast("Nota Modificada correctamente","bg-success");
     })
     .catch((error) => {

         console.log(error);
         showToast("ERROR: " +  error.mensaje, "bg-danger");
     })
 }else{
         
        showToast("Completa el campo Id del formulario", "bg-success");

 }

}


function deleteNotas(){ ///borrar  //

    let id = document.getElementById("mark_id").value;
    console.log(id);

    let url = "http://localhost:4000/notas";

    let param =
    {

        headers: {"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify({id: id}),// la posicion ( como en post MAN)
        method: "DELETE" // 
  
    }

  
    if (id !=""){

        fetch(url,param)
        .then((data) =>{

           return data.json();
        }) 

        .then((data) => {

           console.log(data);

           showToast("Nota eliminada", "bg-success");
        })
        .catch((error) => {

          console.log(error);
        })

    }else{

        showToast("Rellena el campo Id del formulario", "bg-danger");
    }
}

///////////////////////////////////////////////////////
// validación del prof (apuntes clase )

function validar(notas)
{
    resultado = false
    if ( notas.students_id == "" || notas.students_id == "null")
    {
        showToast("AVISO: Campo Id de Estudiante no informado", "bg-warning");
    }
    else if ( notas.subject_id == "" || notas.subject_id == "null")
    {
        showToast("AVISO: Campo Id de Asignatura no informado", "bg-warning");
    }
    else if (notas.mark  == "" || notas.mark == "null")
    {
        showToast("AVISO: Campo Nota no informado", "bg-warning");

    } else if (notas.id  == "" || notas.id  == "null")
    {
        showToast("AVISO: Campo id no informado", "bg-warning");

    }
    else
        resultado = true

    return resultado;
}

// TOSTADAS!   (apuntes clase)

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}