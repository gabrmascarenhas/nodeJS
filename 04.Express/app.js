
import express from 'express';
import userRoutes from "./routes/userRoutes.js";
import logger from './middleware/logger.js'

const app = express();

//Middlewares
app.use(express.json());
app.use(logger);

//Routes
app.use('/api/users', userRoutes);

//Server
const host = "localhost";
const port = 3000;

app.listen(port, () => {
    console.log("Servidor rodando em https://loccalhost:3300");
    console.log(`Servidor rodando em: https://${host}:${port}`);
});