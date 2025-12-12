import * as productsModels from '../models/productsModels.js'

export const getAllProductsServices = async() => {
    return(
        new Promise( async(res, rej) => {
            try {
                const products = await productsModels.allProductsModels();
                res(products);
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
                const allProducts = await productsModels.allProductsModels();
                const product = allProducts.find(allProducts.id === id);
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