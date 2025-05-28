
    import express from 'express';
    import userRoutes from "./routes/userRoutes.js";
    import logger from './middleware/logger.js';
    import cors from 'cors';
    // import authRoutes from 'authRoutes'

    const app = express();

    //Middlewares
    app.use(express.json());
    app.use(logger);
    app.use(cors());

    //Routes
    app.use('/api/users', userRoutes);

    //Server
    const host = "localhost";
    const port = 3300;

    app.listen(port, () => {
        // console.log("Servidor rodando em https://loccalhost:3300");
        console.log(`Servidor rodando em: http://${host}:${port}`);
    });