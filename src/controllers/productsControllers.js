import * as productsServices from '../services/productsServices.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await productsServices.getAllProductsServices();
        console.log(products);
        res.status(200).json(products);
    } catch (error) {
        res.status(500);
    };
};

export const getProductID = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await productsServices.getProductIDServices(id);
        if (product) {
            res.status(200).json(product);  
        } else {
            res.status(404).json({message: 'Error, producto no encontrado'})
        };
    } catch (error) {
        res.status(400).json({message: 'Error en la petición. Controlar que ID sea correcto'})
    };
};

export const addProduct = async (req, res) => {
    try {
        const product = req.body;
        const newProduct = await productsServices.addProductServices(product);
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({message: 'Algo salio mal! El producto no pudo ser agregado'})
    };
};

export const deleteProducts = async (req, res) => {
    try {
        const id = req.params.id;
        if(id) {
            await productsServices.deleteProductsServices(id);
            res.sendStatus(200) 
        } else {
            res.status(400).json(error)
        }
    } catch (error) {
        res.status(500).json({message: 'ha ocurrido un error, el producto no pudo ser eliminado'});
    };
};