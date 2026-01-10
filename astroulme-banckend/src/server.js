import express from 'express';
import cors from 'cors'; // ← Já importado aqui
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();

// ❌ REMOVA esta linha duplicada:
// const cors = require('cors');

// ✅ Configure CORS CORRETAMENTE:
app.use(cors({
    origin: ['https://astrolume-mobile.vercel.app', 'http://localhost:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`🔥 Backend rodando na porta ${PORT}`);
    console.log(`✅ CORS configurado para: https://astrolume-mobile.vercel.app`);
});