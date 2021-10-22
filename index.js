const div = ": "
const productos = [
  { id: 1, producto: "GTX 1660 Super", precio: 97000 },
  { id: 2, producto: "RTX 3060 12GB", precio: 110362 },
  { id: 3, producto: "RTX 3060ti 8GB", precio: 156000},
  { id: 4, producto: "Core I3 10100", precio: 12500},
  { id: 5, producto: "Core I5 10400", precio: 22100},
  { id: 6, producto: "Core I7 10700" , precio:  48500},
];
let sumaID = productos.length + 1;
let newProduct = prompt("Añade un nuevo producto");
let PriceNewProduct = parseInt(prompt("Añade un precio a " + newProduct));
let ArrayNew = productos.push({ id: sumaID, producto: newProduct, precio: PriceNewProduct });

alert("Lista de productos:");
alert("Total de productos: " + sumaID)
for (const producto of productos) {
    alert(producto.id + div + producto.producto + div + producto.precio);
}
let MaxPrice =  parseInt(prompt("Inserte el precio maximo"))
const MaxPriceFilter = productos.filter(producto => producto.precio < MaxPrice);
for(producto of MaxPriceFilter){
    alert(producto.id + div + producto.producto + div + producto.precio);
}