//Para almacenar los datos en el Local Storage del navegador
function guardarAlmacenamientoLocal(llave,valorAGuardar){
    localStorage.setItem(llave, JSON.stringify(valorAGuardar));
}

//Para llamar datos desde el Local Storage del navegador
function obteberAlmacenamientoLocal(llave){
    const datos=JSON.parse(localStorage.getItem(llave));
    return datos;
}

//Recogemos los datos
let alumnos= obteberAlmacenamientoLocal('alumnos') || [];
let mensaje=document.querySelector('#mensaje');

const anadirAlumno = document.getElementById('alumnoAnadir');
const anadirApellido = document.getElementById('apellidoAnadir');
const anadirEmail = document.getElementById('emailAnadir');
const anadirImagen = document.getElementById('imagenAnadir');

//Dejamos al JS esperando el evento click en el botón enviar
document.getElementById('botonAnadir').addEventListener('click', function(event){
    event.preventDefault()
    let alumnoAnadir= anadirAlumno.value;
    let apellidoAnadir= anadirApellido.value;
    let emailAnadir= anadirEmail.value;
    let imagenAnadir= anadirImagen.value;

    console.log(alumnoAnadir+" "+apellidoAnadir+" "+emailAnadir+" "+imagenAnadir)
    let van=true;

    //Verificamos que los campos están vacíos para dar mensaje de error
    if(alumnoAnadir==''|| apellidoAnadir=='' || emailAnadir=='' || imagenAnadir==''){
        //Creamos una lista de clases
        mensaje.classList.add('llenarCampos');
        setTimeout(()=>{
            mensaje.classList.remove('llenarCampos')
        }, 5000);
        van = false;
    }
    else{
        for(let i=0; i<alumnos.length; i++){
            if(alumnos[i].nombre == alumnoAnadir){
                mensaje.classList.add('repetidoError');
                setTimeout(()=>{
                    mensaje.classList.remove('repetidoError')
                }, 5000);
                van=false;
            }
        }
    }

    //Grabamos los datos y actualizamos la ventana
    if(van== true){
        alumnos.push({
            nombre: alumnoAnadir,
            apellido: apellidoAnadir,
            email: emailAnadir,
            urlImagen: imagenAnadir
        })
        mensaje.classList.add('realizado');
        setTimeout(()=>{
            mensaje.classList.remove('repetidoError');
            window.location.reload();
        },1500);
    }

    //Guardamos en el Local Storage del navegador
    guardarAlmacenamientoLocal('alumnos', alumnos);
})

// window.addEventListener('load',()=>{
//     const alumnoEd=document.getElementById('alumnoEditar');
//     const alumnoEl=document.getElementById('alumnoEliminar');
//     for(let i=0; i<alumnos.length;i++){
//         alumnoEd.innerHTML+=`<option>${alumnos[i].nombre}</option>`
//         alumnoEl.innerHTML+=`<option>${alumnos[i].nombre}</option>`
//     }
//     Object.keys(alumnos[0]).forEach(element=>{
//         atributoEd.innerHTML+=`<option>${element}</option>`
//     });

//     let muestraAlumnos= document.getElementById('mostrarAlumnos');
//     muestraAlumnos.innerHTML='';
//     for(let i=0; i<alumnos.length; i++){
//         muestraAlumnos.innerHTML+=`
//         <div clas="contenedorAlumnos">
//         <img src="${alumnos[i].urlImagen}"> 
//         <div class=informacion>
//         <p>${alumnos[i].nombre}</p>
//         <p class="apellido"><span>Apellido: ${alumno[i].apellido}</span></p>
//         email:${alumnos[i].email}<p></p></div></div>`
//     }
    
//     obteberAlmacenamientoLocal();
// })

const alumnoEd = document.getElementById('alumnoEditar')
const atributoEd = document.getElementById('atributoEditar')
const nuevoAtributoEd = document.getElementById('nuevoAtributo')

document.getElementById("botonEditar").addEventListener("click", function (event) {
    event.preventDefault()
    let alumnoEditar = alumnoEd.value
    let atributoEditar = atributoEd.value
    let nuevoAtributo = nuevoAtributoEd.value
    let van = false
    if (alumnoEditar == '' || atributoEditar == '' || nuevoAtributo == '') {
        mensaje.classList.add('llenarCampos')
        setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 2500)
    }
    else {
        for (let i = 0; i < alumnos.length; i++) {
            if (alumnos[i].nombre == alumnoEditar) {
                alumnos[i][atributoEditar] = nuevoAtributo
                van = true
            }
        }
        if (van == true) {
            mensaje.classList.add('realizado')
            setTimeout(() => {
                mensaje.classList.remove('realizado')
                window.location.reload()
            }, 1500);
        }
        else {
            mensaje.classList.add('noExisteError')
            setTimeout(() => { mensaje.classList.remove('noExsiteError') }, 2500);
        }
        guardarAlmacenamientoLocal('alumnos', alumnos);
    }
})

// mostrar alumnos
window.addEventListener("load", () => {
    const alumnoEd = document.getElementById('alumnoEditar')
    const alumnoEl = document.getElementById('alumnoEliminar')
    for (let i = 0; i < alumnos.length; i++) {
        alumnoEd.innerHTML += `<option>${alumnos[i].nombre}</option>`
        alumnoEl.innerHTML += `<option>${alumnos[i].nombre}</option>`
    }
    Object.keys(alumnos[0]).forEach(element => {
        atributoEd.innerHTML += `<option>${element}</option>`
    });

    let muestraalumnos = document.getElementById('mostrarAlumnos')
    muestraalumnos.innerHTML = ''
    for (let i = 0; i < alumnos.length; i++) {
        muestraalumnos.innerHTML += `<div class="contenedorAlumnos"><img src="${alumnos[i].urlImagen}"><div class="informacion"><p>${alumnos[i].nombre}</p><p class="apellido"><span>Apellido: ${alumnos[i].apellido}</span></p> email: ${alumnos[i].email}<p></p></div></div>`
    }
})