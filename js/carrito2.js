const URLJSON = '../pages/datos/datos.json';
const productosv2 = [];
const carrito = [];

$(document).ready(() => {
    $.getJSON(URLJSON,(respuesta) => {
        for (let z of respuesta){
            productosv2.push(z);
        }
        //console.log(productosv2);
        for (let x of productosv2){
            /* console.log(respuesta); */
            $('#cuerpo').append(`
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
        $('#cuerpo').fadeIn('5000');
    })
});

let numCart = 0;

const agregarCarrito = (idProd) => {
    if(carrito.some(elemento => elemento == productosv2[idProd])){
        $('#popOverCarrito').prepend(
            `
                <div id="popoverAgregar" style="display: block" style="hidden">
                    Se sumo al carrito
                </div>
            `
        )
        $('#popoverAgregar').css('visibility','visible')
                            .fadeOut('7200');
        numCart = numCart + 1; 
        productosv2[idProd].caja = productosv2[idProd].caja + 1;
        //console.log(productosv2[idProd].caja)
    }
    else{
        $('#popOverCarrito').prepend(
            `
                <div id="popoverAgregar" style="display: block" style="hidden">
                    Se sumo al carrito
                </div>
            `
        )
        $('#popoverAgregar').css('visibility','visible')
                            .fadeOut('7200');
        numCart = numCart + 1;
        productosv2[idProd].caja = productosv2[idProd].caja + 1;
        carrito.push(productosv2[idProd]);
    }
    //carrito.push(productosv2[idProd]);
    $('#carrito_cantidad').html(`${numCart}`);
    //console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
};