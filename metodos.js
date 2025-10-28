const url = 'https://fakestoreapi.com/products';

export async function traerProductos () {
    try{
        const response = await fetch(url , {
            method: 'GET',
        })
        const data = await response.json();
       data.forEach( producto => {
            console.log(`
Nombre: ${producto.title}
Precio: ${producto.price}
Categoría: ${producto.category}
`);
        });
        //console.log(data);
    } catch (e) {
        console.log(`ERROR AL TRAER LOS PRODUCTOS - ${e}`)
    }
};

export async function traerUnitario (id) {
    try{
        const response = await fetch(`${url}/${id}` , {
            method: 'GET',
        })
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.log(`ERROR AL TRAER PRODUCTO - ${e}`)
    }
};

export async function crearProducto (producto) {
    try{
        const response = await fetch(url , {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(producto)
        })
        const data = await response.json();
        console.log(`Se agrego el siguiente producto:
            ID: ${data.id}
            Nombre: ${data.title}
            Precio: ${data.price}
            Categoría: ${data.category}`);
    } catch (e) {
        console.log(`ERROR AL CREAR PRODUCTO - ${e}`)
    }
};

export async function eliminarProducto (id) {
    try{
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })

        const data = await response.json();
        console.log(data);

    }catch(e) {
        console.log(`ERROR AL ELIMINAR PREODUCTO - ${e}`)
    }
}