/** CAPITULO 66 **/
const carrito = [
    {nombre: 'Monitor 25 Pulg.', precio: 500},
    {nombre: 'Televisión', precio: 300},
    {nombre: 'Micrófono', precio: 100}
];

const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`);

carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`) );

console.log(nuevoArreglo);
