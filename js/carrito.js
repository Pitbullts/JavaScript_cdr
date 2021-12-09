let total = 0;

$(document).ready(function imprimirCarrito() {
    //Carga todas las Cards cargadas en "carrito" que esta en LocalStorage.
    let obtenerProductos = JSON.parse(localStorage.getItem("carrito"));
    for (const producto of obtenerProductos) {
        total += parseFloat(producto.precio * producto.caja);
        //Por cada producto además de los datos agregamos un botón 
        $('#carrito').append(`
            <div class="card text-center" style="width: 18rem;">
                <div class="card-body">
                    <input type="hidden" id="idProd" value="${producto.id}">
                    <h2 class="card-title" id="${producto.id}">${producto.producto}</h2>
                    <p class="card-text">$ ${producto.precio}</p>
                    <p> ${producto.caja} </p>
                </div>
            </div>
        `);
    }
    if (obtenerProductos != ""){
        $("#carrito").append(`
            <div class="card text-center">
                <div class="card-header">
                    Total a Pagar:
                </div>
                <div class="card-body">
                    <h5 class="card-title">Precio final</h5>
                    <p class="card-text">$${total}</p>
                    <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Pagar</button>
                </div>
            </div>
         `);
    }
    else{
        $('#carrito').append(`
            <div class="card text-center"> No posee productos en el carrito</div>
        `);
    };
    $('#carrito').fadeIn('5000');
});

$('#vaciarCarrito').on('click', () =>{ // vacio el carrito creando un nuevo array "carrito" y subiendolo al localStorage con la misma key.
    const carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
});


$('#pagarCompra').on('click', () => {
    nombreApellido = $('#nombreApellido').val();
    pinCheck = $('#pinCheck').val();
    emailCheck = $('#emailCheck').val();
    tarjetaCheck = $('#tarjetaCheck').val();
    
    if ((nombreApellido == '') || (pinCheck == '') || (emailCheck == '') || (tarjetaCheck == '')){
        alert('Complete Todos los campos')
    }
    else{
        let obtenerProductos = [];
        localStorage.setItem("carrito",JSON.stringify(obtenerProductos))
        location.reload();
    }
})