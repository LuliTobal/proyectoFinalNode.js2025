import * as productsModels from '../models/productsModels.js'

export const getAllProductsServices = async() => {
    return(
        new Promise( async(res, rej) => {
            try {
                const collectionSnap = await productsModels.allProductsModels();
                const productos = [];
                collectionSnap.forEach((doc) => {
                    productos.push({...doc.data(), id: doc.id}) 
                });
                console.log(productos);
                res(productos);
            } catch (error) {
                rej(error);
            }
        })
    );
};

export const getProductIDServices = async(id) => {
    return(
        new Promise( async(res, rej) => {
            try {
                const product = await productsModels.getProductIDModels(id);
                res(product);
            } catch (error) {
                rej(error);
            }
        })
    );
};

export const addProductServices = async(producto) => {
    return(
        new Promise( async(res, rej) =>{
            try {
                const newProduct = await productsModels.addProductModels(producto);
                res(newProduct);
            } catch (error) {
                rej(error)
            }
        })
    );
};

export const deleteProductsServices = async(id) => {
    return(
        new Promise( async(res, rej) => {
            try {
                await productsModels.deleteProductsModels(id);
                res();
            } catch (error) {
                rej(error)
            }
        })
    );
};