import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Simula um "banco de dados" em memória
const filmes = [];

app.get('/filmes', (req, res) => {
    res.status(200).json(filmes);
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));