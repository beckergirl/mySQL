

function getMedia(){ /// alumnos

    let formulario = document.getElementById("resultados");
    formulario.innerHTML = " "; /// pedir info del front para rellenar formulario (usuario)

    let id = document.getElementById("students_id").value; //posicion para acceder a los estudiantes.
     console.log(id);
    if(id){

        const url = "http://localhost:4000/punto3/media?id=" + id;

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

        data.forEach(function(){

                  formulario.innerHTML +=  `<p><b>Nota media del estudiante:</b> ${data[0].media}<br>`
        })
                                                        
        }else{

            showToast("ERROR: " +  data.mensaje, "bg-danger");
        }
    })
    .catch(function(error){

        console.log(error);
    })
    } else {

        showToast("ERROR: introduce  el id del Alumno" , "bg-danger");
    }
}

function getApuntadas(){ /// 

    let formulario = document.getElementById("resultados");
    formulario.innerHTML = " "; /// pedir info del front para rellenar formulario (usuario)

    let id = document.getElementById("students_id").value; //posicion para acceder a los profesionales.
     console.log(id);
    if(id){

        const url = "http://localhost:4000/punto3/apuntadas?id=" + id;

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
    .then(function(result){    

        if (!result.error){      
                     
     console.log(result);
        result.forEach(function(students){
            
        formulario.innerHTML +=  `<p><b>Nombre:</b> ${students.first_name}<br>  
                                 <b>Apellido:</b> ${students.last_name}<br>
                                 <b>Asignatura:</b> ${students.title}<br>
                                 </p>`
        })}                                               
        
        else{

            showToast("ERROR: " +  data.mensaje, "bg-danger")
        }
    })
    .catch(function(error)
    {
        console.log(error);
    })
    } else {

        let url = "http://localhost:4000/punto3/apuntadas";

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

        result.forEach(function (students){               
         
            formulario.innerHTML += `<p><b>Nombre:</b> ${students.first_name}<br>  
                                     <b>Apellido:</b> ${students.last_name}<br>
                                     <b>Asignatura:</b> ${students.title}<br>
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

function getImpartidas(){ /// 

    let formulario = document.getElementById("resultados");
    formulario.innerHTML = " "; /// pedir info del front para rellenar formulario (usuario)

    let id = document.getElementById("teachers_id").value; //posicion para acceder a los profesionales.
     console.log(id);
    if(id){

        const url = "http://localhost:4000/punto3/impartidas?id=" + id;

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

        data.forEach(function (teachers){

                formulario.innerHTML +=  `<p><b>Nombre:</b> ${teachers.first_name}<br>  
                                          <b>Apellido:</b> ${teachers.last_name}<br>
                                          <b>Asignatura:</b> ${teachers.title}<br>
                                          </p>`
                                                        
        })

        }else{

            showToast("ERROR: " +  data.mensaje, "bg-danger");
        }
    })
    .catch(function(error){

        console.log(error);
    })
    } else {

        let url = "http://localhost:4000/punto3/impartidas";

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

    result.forEach(function (subjects){               
                                 
        formulario.innerHTML += `<p><b>Nombre:</b> ${subjects.first_name}<br>  
                                 <b>Apellido:</b> ${subjects.last_name}<br>
                                 <b>Asignatura:</b> ${subjects.title}<br>
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

// TOSTADAS!   (apuntes clase)

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}













