function guardarDatos(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellidos").value;
    var movil = document.getElementById("movil").value;
    var email = document.getElementById("email").value;
    var direccion = document.getElementById("direccion").value;

    const datos={
        'apellido':apellido,
        'movil':movil,
        'email':email,
        'direccion':direccion,
    }
    localStorage.setItem(nombre,JSON.stringify(datos));
    //limpiando los cuadros de texto una vez se ingresaron los datos
    document.getElementById("nombre").value= "";
    document.getElementById("apellidos").value="";
    document.getElementById("movil").value= "";
    document.getElementById("email").value= "";
    document.getElementById("direccion").value= "";
    actualizarTodo();
}
function buscarDatos(){
    var nombre = document.getElementById("nombre").value;
    var datos = JSON.parse(localStorage.getItem(nombre)); 
    if (datos) {
      document.getElementById("apellidos").value = datos.apellido;
      document.getElementById("movil").value = datos.movil;
      document.getElementById("email").value = datos.email;
      document.getElementById("direccion").value = datos.email;
    } else {
      document.getElementById("apellidos").value = "";
      document.getElementById("movil").value = "";
      document.getElementById("email").value = "";
      document.getElementById("direccion").value = "";
    }
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
            var datos = JSON.parse(localStorage.getItem(key));
            registro += '<li>'+ '<span class="nom">' + key  + '</span>' +
            '<span class="nom">'+datos.apellido+ '</span>' +
            '<span class="nom">' + datos.movil+ '</span>'+ '<span class="nom">' +
            datos.email + '</span>'+ '<span class="nom">' + datos.direccion + '</span></li><br>';
        }
    }
    document.getElementById("contactos").innerHTML= registro;
}
// = comparacion ==asginacion === comparacion
