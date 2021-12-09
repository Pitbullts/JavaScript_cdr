/* 
// No funcional / Desactivado
let sumaID = productos.length + 1;
let newProduct = prompt("Añade un nuevo producto");
let PriceNewProduct = parseInt(prompt("Añade un precio a " + newProduct));
let ArrayNew = productos.push({
  id: sumaID,
  producto: newProduct,
  precio: PriceNewProduct,
});

alert("Lista de productos:");
alert("Total de productos: " + sumaID);

*/

const URLJSON = "../pages/datos/datos.json";
const productosv2 = [];
const carrito = [];

const mostrarProductos = () => {
  $.getJSON(URLJSON, (respuesta) => {
    for (let z of respuesta) {
      productosv2.push(z);
    }
    for (let x of productosv2) {
      $("#tableProduct").append(`
              <tr>
              <div class="card text-center" style="width: 18rem;" id='btnBorrarCarrito'>

                  <div class="card-body">
                      <input type="hidden" id="idProd" value="${x.id}"> </td>
                      <td class="card-title" id="${x.id}">${x.producto}</h2> </td>
                      <td class="card-text">$ ${x.precio}</p></td>
                      <div class="btn-group" role="group" aria-label="Basic mixed styles example">            
                          <td><button type="button" class="btn btn-success" onclick="agregarCarrito(${x.id})">Agregar</button></td>
                      </div>
                  </div>
              </div>
              </tr>
          `);
    }
    $("#tableProduct").fadeIn("5000");
  });
};

// ------------- Filtrar Mayor Precio ---------------
function respuestaClickExpensive() {
  let cleanProduct = document.getElementById("tableProduct");
  cleanProduct.innerHTML = "";
  let productosordenados = productosv2.sort((a, b) => {
    if (a.precio > b.precio) {
      return -1;
    }
    if (a.precio < b.precio) {
      return 1;
    }
    return 0;
  });

  return productosordenados;
}

function filterMoreExpensive() {
  DesvanecerAnimate();
  timerAfterAnimateExpensive();
}

// ------------- Filtrar - Menor Precio ---------------

function respuestaClickCheaper() {
  fila.innerHTML = "";
  let productosordenados = productosv2.sort((a, b) => {
    if (a.precio < b.precio) {
      return -1;
    }
    if (a.precio > b.precio) {
      return 1;
    }
    return 0;
  });

  return productosordenados;
}

function filterCheaper() {
  DesvanecerAnimate();
  timerAfterAnimateCheaper();
}

// Funcion desvanecer mayor y menor precio

function DesvanecerAnimate() {
  $(document).ready(function () {
    setTimeout(function () {
      $(".productosdesaparece").fadeOut(200);
    }, 200);

    setTimeout(function () {
      $(".productosdesaparece").fadeIn(1000);
    }, 1500);
  });
}
//---------------------------------------------- Timers para Mayor y menor precio
function timerWait() {
  let timeWaitMostrar = setTimeout(mostrarProductos, 1500);
}

function timerAfterAnimateCheaper() {
  let timeWaitCheap = setTimeout(respuestaClickCheaper, 1000);
  timerWait();
}

function timerAfterAnimateExpensive() {
  let timeWaitExpensive = setTimeout(respuestaClickExpensive, 1000);
  timerWait();
}

//---------Jquery--------

$(document).ready(function () {
  console.log("Estamos ready");
  // Botones - Filtrar Mas caro - Mas Barato
  $("#cheaperbtn").click((e) => {
    filterCheaper();
  });
  mostrarProductos();
  $("#expensivebtn").click((e) => {
    filterMoreExpensive();
  });
  // Este es un carrito que no pude hacer funcionar por que  la linea 138 (variable hijos)
  // me devolvia un valor vacio cuando queria que tome la linea de un array de objetos (De usar un array de objetos modifique toda la forma de hacer la tienda y empece a usar un json y hacerlo de otra manera)
  // Carrito
  // let carrito = [];

  /* $(".btnComprar").click(function (e) {
      let hijos = $("#tomarProducto").parent().children();
      
      let valName = $(".valNombre").parent().val();
      let valID = $(".valID").parent().children().val();
      let valPrecio = $(".valPrecio").parent().val();

      console.log(valName, valID, valPrecio);
//          let elementosDatos = $(".elementosMostrar").parent().parent();
      console.log(hijos[0].value);
      console.log(hijos);
//        console.log(elementosDatos);
      carrito.push(productos[(hijos[0].value -1)])
      localStorage.setItem("carritolocal", JSON.stringify(carrito));
      console.log("funca el btn");
    }
    
    )
      */
});
/* let = total = 0;
  $(document).ready(function() {
    $("#boton").click(function (e) {
      let obtenerProductos = JSON.parse(localStorage.getItem("carritolocal"))
      for (const producto in obtenerProductos) { 
        // Si lo cambio a of y en la 155 pongo productos (En vez de carrito), me da la lista y suma de los productos
        // Si lo cambio a of solo, me tira un error de que no puede leer los ${producto.#}
        total += parseFloat(producto.precio);
         $("#carritos").append( `<div>
                                  <h3 class="FormText"> Producto: ${producto.producto}</h3>
                                  <b class="FormText"> $ ${producto.precio}</b>
                                  </div>`

         );
      }

      $("#carritos").append(`<p class="FormText"> Precio Final: $${total}</p>`)
      console.log(total);
    });
  });
*/

let numCart = 0;

const agregarCarrito = (idProd) => {
  if (carrito.some((elemento) => elemento == productosv2[idProd])) {
    $("#popOverCarrito").prepend(
      `
                <div id="popoverAgregar" style="display: block" style="hidden">
                    Se agrego al carrito
                </div>
            `
    );
    $("#popoverAgregar").css("visibility", "visible").fadeOut("7200");
    numCart = numCart + 1;
    productosv2[idProd].caja = productosv2[idProd].caja + 1;
    //console.log(productosv2[idProd].caja)
  } else {
    $("#popOverCarrito").prepend(
      `
                <div id="popoverAgregar" style="display: block" style="hidden">
                    Se agrego al carrito
                </div>
            `
    );
    $("#popoverAgregar").css("visibility", "visible").fadeOut("7200");
    numCart = numCart + 1;
    productosv2[idProd].caja = productosv2[idProd].caja + 1;
    carrito.push(productosv2[idProd]);
  }
  //carrito.push(productosv2[idProd]);
  $("#carrito_cantidad").html(`${numCart}`);
  //console.log(carrito);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
