import express from 'express';
import cors from 'cors';

const app = express();
app.use(exp)
//////////////////////////////////////////////////////////////////////////////////////////////
//REVISAR
const PORT = process.env.PORT || 3000
//
//////////////////////////////////////////////////////////////////////////////////////////////
const corsConfig = {
    method : ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHaders : ['Content-Type', 'Authorization'],
    credential : true,
    optionSuccesStatus: 204
};

app.use(cors(corsConfig));

//FALTA CONFIGURAR PROTECCION DE RUTAS

app.use('/api', productsRouter);


app.use((req, res) =>{
    res.status(404).send('No se encontó la ruta a la que quiere acceder')
});

app.listen(PORT, () => {
    console.log(`El servidor se esta ejecutando en http://localhost:${PORT}`)
});