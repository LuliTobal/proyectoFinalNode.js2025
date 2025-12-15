import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/productsRouter.js'
import logRutes from './src/routes/authRouter.js'


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000

const corsConfig = {
    method : ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHaders : ['Content-Type', 'Authorization'],
    credential : true,
    optionSuccesStatus: 204
};

app.use(cors(corsConfig));

app.use('/api', logRutes)

app.use('/api', productsRouter);


app.use((req, res) =>{
    res.status(404).send('No se encontó la ruta a la que quiere acceder')
});

app.listen(PORT, () => {
    console.log(`El servidor se esta ejecutando en http://localhost:${PORT}`)
});