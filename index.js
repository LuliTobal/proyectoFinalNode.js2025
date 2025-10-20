import { traerProductos, traerUnitario, crearProducto, eliminarProducto } from "./metodos.js";

const args = process.argv.slice(2);

if (args [0] == 'GET' ) {
    if (args.length === 2 ) {
        traerProductos();
    } else if (args.length > 2) {
        traerUnitario(args[2])
    }
} else if (args [0] == 'POST') {
    const producto = {"title": args[1], "price": args[2], "category": args[3]}
    crearProducto(producto)
} else if (args [0] == 'DELETE') {
    eliminarProducto(args[1])
} else if (args[0] == 'H') {
    console.log(`
Comandos disponibles:
    ♦ Para ver todos los productos disponibles: node index.js GET productos
    ♦ Para ver la información de un producto en particular: node index.js GET producto <ID>
    ♦ Para agregar un nuevo producto a la tienda: node index.js POST <nombre> <precio> <categoría>
    ♦ Para eliminar un producto de la tienda: node index.js DELETE <ID>
`);
} else {
    console.log(`Se ha producido un error, el comando no es correcto, ejecutando "node index.js H" podes ver las opciones de comandos disponibles`)
};