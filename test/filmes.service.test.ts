import { describe, it, expect } from "vitest"
import * as service from "../src/services/filmes.service.js"

describe("FilmesService", () => {
    it("deve retornar a lista inicial de filmes", () => {
        const filmes = service.obterTodosFilmes();
        expect(filmes).toHaveLength(4);
        expect(filmes[0].titulo).toBe("Matrix");
    });

    it("deve adicionar um filme corretamente à lista", () => {
        const listaAntes = service.obterTodosFilmes().length;
        const filme = { titulo: "O Poderoso Chefão", ano: 1972 };

        const resultado = service.adicionarFilme(filme);
        const listaDepois = service.obterTodosFilmes();

        expect(resultado.id).toBe(listaDepois.length - 1);
        expect(listaDepois).toHaveLength(listaAntes + 1);
        expect(listaDepois[listaDepois.length - 1].titulo).toBe("O Poderoso Chefão");
    });
});