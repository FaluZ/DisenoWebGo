function mostrarDescripcion() {
    var combo= document.getElementById("productoSelect")

    var imagen= document.getElementById("productoImagen")
    var descripcioP= document.getElementById("productoDescripcion")

    var producto= combo.value;
    var descripcion= "";
    var imagenSrc= "";
    switch (producto) {
        case "laptop": 
            descripcion= "Una laptop es un dispositivo portatil similar a un pc de escritorio...";
            imagenSrc= "img/laptop.png";
            break;
        case "telefono": 
            descripcion= "Un smartPhone es un dispositivo de comunicación...";
            imagenSrc= "img/telefono.png";
            break;
        case "tableta": 
            descripcion= "Una tablet es un dispositivo portatil similar entre una laptop y un smartPhone...";
            imagenSrc= "img/tablet.avif";
            break;
        default:
            descripcion= "";
            imagenSrc= "";
            break;
    }
    imagen.src= imagenSrc
    descripcioP.textContent = descripcion 
}