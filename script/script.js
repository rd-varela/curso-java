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

const datos = []

function formularioEnviar(){
    event.preventDefault();

    nombre = document.getElementsByName("nombre")[0].value;

    ocupacion = document.getElementsByName("ocupacion")[0].value;

    const dato = {nombre, ocupacion}

    datos.push(dato)
    
    let datosLista = "Introducido hasta ahora:\n";

    for (let i = 0; i < datos.length; i++) {
    datosLista += "  - Nombre: " + datos[i].nombre + ", Ocupacion: " + datos[i].ocupacion + "\n";
    }
    alert(datosLista);

    console.log(datos)
}

function formularioRevisar(){
    event.preventDefault();

    let rubro = prompt('Indique su rubro (comerciante, gastronomico, metalurgico')

    switch(rubro) {
        case 'comerciante':
            alert('Hay 19 vacantes disponibles para el rubro');
            break;
        case 'gastronomico':
            alert('Hay 3 vacantes disponibles para el rubro');
            break;
        case 'metalurgico':
            alert('Hay 1 vacante disponible para el rubro');
            break;
        default:
            alert('Opcion no valida. Por favor seleccionar: comerciante, gastronomico o metalurgico')
            break;
    }
}