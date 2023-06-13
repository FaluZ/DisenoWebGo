function guardarDatos(){
    var nombre = document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    localStorage.setItem(nombre,movil);
    //limpiando los cuadros de texto una vez se ingresaron los datos
    document.getElementById("nombre").value="";
    document.getElementById("movil").value="";
    actualizarTodo();
}
function buscarDatos(){
    var nombre = document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    document.getElementById("movil").value=localStorage.getItem(nombre);
}
function eliminarDatos(){
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarTodo();
}
function eliminarTodo(){
    localStorage.clear();
    actualizarTodo();
}
function actualizarTodo(){
    var registro="";
    if (localStorage.length===0) {
        registro += '<li>Vacío</li>';
    } else {
        for (let i = 0; i <= localStorage.length-1; i++) {
            var key = localStorage.key(i);
            registro += '<li>'+ '<span class="nom">' + key + '</span>' +
            '<span class="nom">' + localStorage.getItem(key)+ '</span></li><br>';
        }
    }
    document.getElementById("contactos").innerHTML= registro;
}
// = comparacion ==asginacion === comparacion
