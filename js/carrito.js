let total = 0;

$(document).ready(function imprimirCarrito() {
  //Carga todas las Cards cargadas en "carrito" que esta en LocalStorage.
  let obtenerProductos = JSON.parse(localStorage.getItem("carrito"));
  for (const producto of obtenerProductos) {
    total += parseFloat(producto.precio * producto.caja);
    //Por cada producto además de los datos agregamos un botón
    $("#carrito").append(`
            <div class="border" style="width: 18rem;">
                <div class="">
                    <input type="hidden" id="idProd" value="${producto.id}">
                    <h2 class=" id="${producto.id}">${producto.producto}</h2>
                    <p class="card-text">$ ${producto.precio}</p>
                    <p> Cantidad: ${producto.caja} </p>
                </div>
            </div>
        `);
  }
  if (obtenerProductos != "") {
    $("#carrito").append(`
            <div class="">
                <div class="">
                    Total a Pagar:
                </div>
                <div class="">
                    <h5 class="">Precio final</h5>
                    <p class="">$${total}</p>
                    <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Pagar</button>
                </div>
            </div>
         `);
  } else {
    $("#carrito").append(`
            <div class=""> No posee productos en el carrito</div>
        `);
  }
  $("#carrito").fadeIn("5000");
});

$("#vaciarCarrito").on("click", () => {
  // vacio el carrito creando un nuevo array "carrito" y subiendolo al localStorage con la misma key.
  const carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  location.reload();
});

$(document).ready(function () {
  $("#pagarCompra").on("click", () => {
    DesvanecerAnimate();
  });

  function DesvanecerAnimate() {
    setTimeout(function () {
      $("#alertaCompra").fadeIn(1000);
    }, 200);

    setTimeout(function () {
      $("#alertaCompra").fadeOut(2500);
    }, 3000);
  }
});
