export interface Filme {
    id?: number;
    titulo: string;
    ano: number;
}

// Simula o banco de dados
const filmes: Filme[] = [
    { titulo: "Matrix", ano: 1999 },
    { titulo: "Interestelar", ano: 2014 },
    { titulo: "O Senhor dos Anéis: A Sociedade do Anel", ano: 2001 },
    { titulo: "A Origem", ano: 2010 }
];

export const obterTodosFilmes = (): Filme[] => {
    const filmesComIds = filmes.map((filme, index) => {
        filme.id = index;
        return filme;
    });
    return filmesComIds;
};

export const adicionarFilme = (filme: Filme): Filme => {
    const novoFilme = { ...filme };
    filmes.push(novoFilme);
    novoFilme.id = filmes.length - 1;
    return novoFilme;
};
