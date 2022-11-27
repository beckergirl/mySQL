class Alumno{

    constructor(first_name, last_name, email){

        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
      
    }
}


function getAlumnos(){ /// FUNCIONA

    let formulario = document.getElementById("alumnos");
    formulario.innerHTML = " "; /// pedir info del front para rellenar formulario (usuario)

    let id = document.getElementById("students_id").value; //posicion para acceder a los profesionales.
     
    if(id){

        const url = "http://localhost:4000/alumnos?id=" + id;

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

        formulario.innerHTML +=  `<p><b>Nombre:</b> ${data[0].first_name}<br>  
                                 <b>Apellido:</b> ${data[0].last_name}<br>
                                 <b>email:</b> ${data[0].email}<br>
                                 <b>Id:</b> ${data[0].id}<br>
                                 </p>`
                                                        
        }
        else{

            showToast("ERROR: " +  data.mensaje, "bg-danger")
        }
    })
    .catch(function(error)
    {
        console.log(error);
    })
    } else {

        const url = "http://localhost:4000/alumnos";

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

    result.forEach(function (alumno){               
                                 
        formulario.innerHTML += `<p><b>Nombre:</b> ${alumno.first_name}<br>  
                                 <b>Apellido:</b> ${alumno.last_name}<br>
                                 <b>email:</b> ${alumno.email}<br>
                                 <b>Id:</b> ${alumno.id}<br>
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

function postAlumno(){   // post: añadir datos. (apuntes clase)  // funciona

    let alumno = new Alumno (document.getElementById("first_name").value,
                             document.getElementById("last_name").value,
                             document.getElementById("email").value);
                   
    
    let url = "http://localhost:4000/alumnos";

    if (validar(alumno)){

        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(alumno),
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

                showToast("Alumno creado con id: " + result, "bg-success");
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

function putAlumno(){  // put: MODIFICAR datos. // FUNCIONA!!!

    let putFirst_name = document.getElementById("first_name").value;
    let putLast_name  = document.getElementById("last_name").value;
    let putEmail      = document.getElementById("email").value;
    let id            = document.getElementById("students_id").value;

    if(putFirst_name == ""){

        putFirst_name = null;
    }
    if(putLast_name == ""){

        putLast_name = null;
    }
    if(putEmail == ""){

        putEmail = null;
    }
  
    console.log({ first_name: putFirst_name, last_name : putLast_name, email: putEmail, students_id: id});
    


 let url = "http://localhost:4000/alumnos"; /////

 let param = 
 {
     headers: {"Content-type": "application/json; charset= UTF-8"},
     body: JSON.stringify({ first_name: putFirst_name, last_name : putLast_name, email: putEmail, id}),
     method: "PUT"
 }
 if(id != ""){

      fetch(url, param)
     .then((data)=> {

         return data.json();
     })
     .then((data) => {

         console.log(data.resultado);
         showToast("Alumno Modificado correctamente","bg-success");
     })
     .catch((error) => {

         console.log(error);
         showToast("ERROR: " +  error.mensaje, "bg-danger");
     })
 }else{
         
        showToast("Completa el campo Id del formulario", "bg-success");

 }

}


function deleteAlumno(){ ///borrar  //funciona!!!

    let id = document.getElementById("students_id").value;

    let url = "http://localhost:4000/alumnos";

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

           showToast("Alumno eliminado", "bg-success");
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

function validar(alumno)
{
    resultado = false
    if ( alumno.first_name == "" || alumno.first_name == "null")
    {
        showToast("AVISO: Campo nombre no informado", "bg-warning");
    }
    else if ( alumno.last_name == "" || alumno.last_name == "null")
    {
        showToast("AVISO: Campo apellido no informado", "bg-warning");
    }
    else if (alumno.email  == "" || alumno.email  == "null")
    {
        showToast("AVISO: Campo email no informado", "bg-warning");

    } else if (alumno.id  == "" || alumno.id  == "null")
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
