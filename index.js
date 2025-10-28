import { traerProductos, traerUnitario, crearProducto, eliminarProducto } from "./metodos.js";

const args = process.argv.slice(2);

if (args [0] == 'GET' ) {
    if (args.length === 2 ) {
        traerProductos();
    } else if (args.length > 2) {
        traerUnitario(args[2])
    }
} else if (args[0] == 'POST' && args.length == 4) {
    const producto = {"title": args[1], "price": args[2], "category": args[3]}
    crearProducto(producto)
} else if (args [0] == 'DELETE') {
    eliminarProducto(args[1])
} else if (args[0] == 'H') {
    console.log(`
Comandos disponibles:
    ♦ Para ver todos los productos disponibles: npm start GET productos
    ♦ Para ver la información de un producto en particular: npm start GET producto <ID>
    ♦ Para agregar un nuevo producto a la tienda: npm start POST <nombre> <precio> <categoría>
    ♦ Para eliminar un producto de la tienda: npm start DELETE <ID>
`);
} else {
    console.log(`Se ha producido un error, el comando no es correcto, ejecutando "npm start H" podes ver las opciones de comandos disponibles`)
};