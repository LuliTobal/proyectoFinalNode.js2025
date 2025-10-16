const url = 'https://fakestoreapi.com/products';
//const id = id;

async function leerProductos() {
    try{
        const res = await fetch(url, {
            method : 'GET',
            headers : {'Content-Type' : 'application/json'}
        });
        const data = await res.json()
        console.log(data);
    }catch(error) {
        console.log(`Ha ocurrido un error al intentar traer la información: ${error}`)
    }
};

async function traerUnitario (id) {
    try{
        const res = await fetch(`${url}/${id}`,{
            method: 'GET',
            headers : {'Content-Type' : 'application/json'}
        });
        const data = await res.json();
        console.log(data)

    }catch (error){
        console.log(`Ha ocurrido un error al intentar traer la información: ${error}`)
    }
};

async function cargarProducto (producto){
    try {
        const res = await fetch(`${url}`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(producto)
        });
        const data = await res.json();
        console.log(data);

    } catch (error) {
        console.log('Error al realizar la acción, el producto no se cargó correctamente')
    }
};

async function eliminarProducto (id) {
    try {
        const res = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        console.log(data);
        
    } catch (error) {
        console.log('Se produjo un error al intentar eliminar el producto')
    }
};