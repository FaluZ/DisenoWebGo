function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.movil = document.getElementById("movil").value;
}

function recuperarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.movil != undefined)) {
        document.getElementById("datos").innerHTML = "nombre : " + localStorage.nombre + "<br> Num Celular: "
        + localStorage.movil;
    }else{
        document.getElementById("datos").innerHTLM = "No has ingresado datos en tu agenda";
    }
}