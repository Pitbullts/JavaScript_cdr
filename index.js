const div = ": ";
const productos = [
  { id: 1, producto: "GTX 1660 Super", precio: 97000 },
  { id: 2, producto: "RTX 3060 12GB", precio: 110362 },
  { id: 3, producto: "RTX 3060ti 8GB", precio: 156000 },
  { id: 4, producto: "Core I3 10100", precio: 12500 },
  { id: 5, producto: "Core I5 10400", precio: 22100 },
  { id: 6, producto: "Core I7 10700", precio: 48500 },
];
/* let sumaID = productos.length + 1;
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
    let contenedor = document.createElement("div");
    contenedor.innerHTML =
      `
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">${producto.producto}</h5>
                  <p class="card-text">ID: ${producto.id}</p>
                  <p class="card-text"><b>$ ${producto.precio}</b></p>
                  <a href="#" class="btn btn-primary" onclick=obtenerCantidadProductosComprados(${producto.id})>Comprar</a>
              </div>
          </div>
             
      `
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
function respuestaClick() {
    let productosordenados = productos.sort ((a, b) => {
    if (a.precio < b.precio) {
      return -1;
    }
    if (a.precio > b.precio) {
      return 1;
    }
    return 0;
  });
  
  return(productosordenados);

}

function dosunidas() {
  respuestaClick();
  mostrarProductos();
}

const saludar = () => {
  alert("hola")
}


// let btnExpensive = document.getElementById("btnExpensive").addEventListener("click",respuestaClick)

//console.log(respuestaClick)
/* 

let btnExpensive = document.getElementById("expensivebtn")
  btnExpensive.onclick = () =>{
    productos.sort((a, b) => {
      if (a.precio > b.precio) {
        return -1;
      }
      if (a.precio < b.precio) {
        return 1;
      }
      return 0;
    });
  } 

  */

  window.onload = function() {
    mostrarProductos();
    let btnExpensive = document.getElementById("expensivebtn")
    btnExpensive.addEventListener("click",dosunidas,true);

  };