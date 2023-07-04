// Variables globales
 // Variables globales
 let carrito = [];

 // Función para agregar un producto al carrito
 function agregarProducto(id, nombre, precio) {
   const cantidad = parseInt(document.querySelector(`#productos li:nth-child(${id}) input`).value);

   const producto = {
     id,
     nombre,
     precio,
     cantidad
   };

   carrito.push(producto);
   mostrarCarrito();
 }

 // Función para mostrar el carrito en el HTML
 function mostrarCarrito() {
   const listaCarrito = document.getElementById('lista-carrito');
   listaCarrito.innerHTML = '';

   let total = 0;

   carrito.forEach((producto) => {
     const { id, nombre, precio, cantidad } = producto;
     total += precio * cantidad;

     const li = document.createElement('li');
     li.innerHTML = `${nombre} - $${precio} - Cantidad: ${cantidad}`;
     listaCarrito.appendChild(li);
   });

   document.getElementById('total').textContent = total;
 }

 // Función para guardar el carrito en el LocalStorage
 function guardarCarrito() {
   localStorage.setItem('carrito', JSON.stringify(carrito));
   alert('El carrito se ha guardado correctamente.');
 }

 // Función para cargar el carrito desde el LocalStorage
 function cargarCarrito() {
   const carritoGuardado = localStorage.getItem('carrito');

   if (carritoGuardado) {
     carrito = JSON.parse(carritoGuardado);
     mostrarCarrito();
   }
 }

 // Función para limpiar el carrito
 function limpiarCarrito() {
   carrito = [];
   mostrarCarrito();
   localStorage.removeItem('carrito');
 }

 // Cargar el carrito al cargar la página
 cargarCarrito();