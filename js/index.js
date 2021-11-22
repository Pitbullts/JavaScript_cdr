    const div = ": ";
    const productos = [
      { id: 1, producto: "Cafe Americano", precio: 190,},
      { id: 2, producto: "Cafe Expresso", precio: 160 },
      { id: 3, producto: "Cafe Latte", precio: 200 },
      { id: 4, producto: "Cafe Cappuccino", precio: 160 },
      { id: 5, producto: "Cafe Cortado", precio: 150 },
      { id: 6, producto: "Cafe Black", precio: 130 },
    ];

    const URLJSON = 'datos.json';
    
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
        let contenedor = document.createElement("tr");
        contenedor.innerHTML = `     


                      <td class="card-title productosdesaparece">${producto.producto}</td>
                      <td class="card-text productosdesaparece">ID: ${producto.id}</td>
                      <td class="card-text productosdesaparece"><b>$ ${producto.precio}</b></td>
                      <td class="productosdesaparece"><button class="btnComprar btn btn-primary">Añadir</button></td>
                      </tr>




                
          `;

        document.getElementById("fila").appendChild(contenedor);
      }
    };
    // ------------- Filtrar Mayor Precio ---------------
    function respuestaClickExpensive() {
      fila.innerHTML = "";
      let productosordenados = productos.sort((a, b) => {
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
      let productosordenados = productos.sort((a, b) => {
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

  /*  // -------------------------------------- Carga de Botones de filtrado entre otros.
    window.onload = function () {
      // ------------------------------- Filtrar mas caro    /--------Jquery Nueva actividad- Cambie de JS a Jquery los botones--------
      $("#expensivebtn").click((e) => {
        filterMoreExpensive();
      });
      //-------------------------------- Filtrar mas barato /---------Jquery Nueva actividad- Cambie de JS a Jquery los botones -- use otra forma a la de arriba para probar :)s--------
      mostrarProductos();
      $("#cheaperbtn").click((e) => {
        filterCheaper();
      });
      //INICIO CARRITOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO


      
    };
    //---------Jquery--------
    */


    $(document).ready(function () {
      console.log("Estamos ready")
              // ------------------------------- Filtrar mas caro    /--------Jquery Nueva actividad- Cambie de JS a Jquery los botones--------
      $("#expensivebtn").click((e) => {
        filterMoreExpensive();
      });
      //-------------------------------- Filtrar mas barato /---------Jquery Nueva actividad- Cambie de JS a Jquery los botones -- use otra forma a la de arriba para probar :)s--------
      mostrarProductos();
      $("#cheaperbtn").click((e) => {
        filterCheaper();
      });

        // Carrito
        let carrito = [];

        $(".btnComprar").click(function (e) {
          let hijos = $(e.target).parent().children();
          console.log(hijos[0].value);
          carrito.push(productos[(hijos[0].value -1)])
          localStorage.setItem("carrito", JSON.stringify(carrito));
          console.log("funca el btn");
        }
        
        )

    }
    );
let = total = 0;
      $(document).ready(function() {
        $("#boton").click(function (e) {
          let obtenerProductos = JSON.parse(localStorage.getItem("carrito"))
          for (const producto in obtenerProductos) {
             total += parseFloat(producto.precio);
             $("#carritos").append( ` <div>
                                      <h3 class="FormText"> Producto: ${producto.producto}</h3>
                                      <b class="FormText"> $ ${producto.precio} </b>
                                      </div>`

             );
          }

          $("#carritos").append(`<p> Precio Final: $${total}</p>`)
          console.log(total);
        });
      });