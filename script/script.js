let edad = prompt('Indique su edad')

if (edad < 18){
    alert('Debe ser mayor para ingresar a este sitio')
    document.getElementById("accessDenied").style.visibility = "visible";
}
else{
    alert('Bienvenido!')
}


let nombre = document.getElementsByName("nombre")
let ocupacion = document.getElementsByName("ocupacion")

function formularioEnviar(){
    event.preventDefault();

    nombre = document.getElementsByName("nombre")[0].value;

    ocupacion = document.getElementsByName("ocupacion")[0].value;

    alert('Tu nombre es '+ nombre +' y tu ocupacion es ' + ocupacion)
}