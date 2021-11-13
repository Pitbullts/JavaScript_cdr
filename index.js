const div = ": ";
const productos = [
  { id: 1, producto: "Cafe Americano", precio: 190 },
  { id: 2, producto: "Cafe Expresso", precio: 160 },
  { id: 3, producto: "Cafe Latte", precio: 200 },
  { id: 4, producto: "Cafe Cappuccino", precio: 160 },
  { id: 5, producto: "Cafe Cortado", precio: 150 },
  { id: 6, producto: "Cafe Black", precio: 130 },
];
/* 
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


const mostrarProductos = () => {
  for (const producto of productos) {
    let contenedor = document.createElement("tr");
    contenedor.innerHTML =
      `     



                  <td class="card-title">${producto.producto}</td>
                  <td class="card-text">ID: ${producto.id}</td>
                  <td class="card-text"><b>$ ${producto.precio}</b></td>
                  </tr>




             
      `

    // <a href="#" class="btn btn-primary" onclick=obtenerCantidadProductosComprados(${producto.id})>Comprar</a>
    document.getElementById('fila').appendChild(contenedor);

  }
}

// Codigo a reformar para cambiar a dom y sort para la entrega anterior

// let container = document.createElement("div");
/* for (const producto of productos) {
  // alert(producto.id + div + producto.producto + div + producto.precio);
    container.innerHTML =   <h3> ID: ${producto.id}</h3>
                            <p> Producto: ${producto.producto}</p>,
                            <b>$ ${producto.precio}</b>;
    document.body.appendChild(container);
}

        let MaxPrice = parseInt(prompt("Inserte el precio maximo"));
        const MaxPriceFilter = productos.sort(
          (producto) => producto.precio < MaxPrice
        );
        for (producto of MaxPriceFilter) {
          alert(producto.id + div + producto.producto + div + producto.precio);
        }
*/
// Nota para mañana: falta que se pinte el html denuevo

// ------------- Filtrar Mayor Precio ---------------
function respuestaClickExpensive() {
  fila.innerHTML = ''
  let productosordenados = productos.sort((a, b) => {
    if (a.precio > b.precio) {
      return -1;
    }
    if (a.precio < b.precio) {
      return 1;
    }
    return 0;
  });

  return (productosordenados);

}



function filterMoreExpensive() {
  respuestaClickExpensive();
  mostrarProductos();
}


// ------------- Filtrar - Menor Precio ---------------

function respuestaClickCheaper() {
  fila.innerHTML = ''
  let productosordenados = productos.sort((a, b) => {
    if (a.precio < b.precio) {
      return -1;
    }
    if (a.precio > b.precio) {
      return 1;
    }
    return 0;
  });

  return (productosordenados);

}



function filterCheaper() {
  respuestaClickCheaper();
  mostrarProductos();
}

// -------------------------------------- Carga de Botones de filtrado entre otros.
window.onload = function () {

  // ------------------------------- Filtrar mas caro    /--------Jquery Nueva actividad- Cambie de JS a Jquery los botones--------
 $('#expensivebtn').on("click", filterMoreExpensive);
  //-------------------------------- Filtrar mas barato /---------Jquery Nueva actividad- Cambie de JS a Jquery los botones--------
  mostrarProductos();
  $('#cheaperbtn').on("click", filterCheaper)
};
//----------------------------------------------

//---------Jquery---------

let boton = $('#btnAdd');