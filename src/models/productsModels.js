import { addDoc, collection, deleteDoc, doc, documentSnapshotFromJSON, getDoc, getDocs } from "firebase/firestore";
import { db } from "../data/dataBaseAcces.js";

export const allProductsModels = () => {
    return(
        new Promise( async (res, rej) => {
            try {
                const collectionSnap = await getDocs(collection( db , 'products'));
                res(collectionSnap);
            } catch (error) {
                console.log('Problemas para conectar con base de datos. Error', error);
                rej(error);             
            };
        })
    );
};

export const getProductIDModels = (id) => {
    return(
        new Promise(async(res, rej) => {
            try {
                const docRef = doc( db , 'products' , id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log('Document data:', docSnap.data());
                    res(docSnap.data());
                }else{
                    console.log('Producto no encontrado');
                    res();
                }
            } catch (error) {
                console.log('Error, problemas para conectar con base de datos', error);
                rej(error);  
            }
        })
    )
}

export const addProductModels = (product) => {
    return(
        new Promise(async(res, rej) => {
            try {
                const docRef = await addDoc(collection( db, 'products'), product);
                console.log('el id', docRef.id , 'producto:' , docRef)
                res({...product, id: docRef.id});
            } catch (error) {
                console.log('Problemas para conectar con base de datos. Error', error);
                rej(error);     
            };
        })
    );
};

export const deleteProductsModels = (id) => {
    return(
        new Promise(async(res, rej) => {
            try {
                await deleteDoc(doc(db , 'products', id));
                res(console.log('producto eliminado!'))
            } catch (error) {
                console.log('Problemas para conectar con base de datos. Error', error);
                rej(error);     
            };
        })
    );
};