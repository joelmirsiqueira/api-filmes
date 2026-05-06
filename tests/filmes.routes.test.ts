import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("Rotas de Filmes", () => {
  it("deve retornar todos os filmes com status 200", async () => {
    const response = await request(app).get("/filmes");
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(4);
    expect(response.body[0]).toMatchObject({
      titulo: "Matrix",
      ano: 1999,
    });
  });

  it("deve adicionar um novo filme com status 201", async () => {
    const filme = { titulo: "O Poderoso Chefão", ano: 1972 };
    const response = await request(app).post("/filmes").send(filme);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        titulo: "O Poderoso Chefão",
        ano: 1972,
      }),
    );
  });

  it("deve deletar um filme existente com status 204", async () => {
    const response = await request(app).delete("/filmes/4");
    expect(response.status).toBe(204);
  });

  it("deve retornar 404 ao tentar deletar um filme inexistente", async () => {
    const response = await request(app).delete("/filmes/999");
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: "Filme não encontrado" });
  });
});
