import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Simula um "banco de dados" em memória
const filmes = [
    { titulo: "Matrix", ano: 1999 },
    { titulo: "Interestelar", ano: 2014 },
    { titulo: "O Senhor dos Anéis: A Sociedade do Anel", ano: 2001 },
    { titulo: "A Origem", ano: 2010 }
];

app.get('/filmes', (req, res) => {
    res.status(200).json(filmes);
});

app.post('/filmes', (req, res) => {
    const novoFilme = req.body;
    filmes.push(novoFilme);
    res.status(201).json(novoFilme);
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));