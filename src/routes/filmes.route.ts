import { Router } from "express";
import * as controller from "../controllers/filmes.controller.js";

const filmesRouter = Router();

filmesRouter.get("/filmes", controller.obterFilmes);
filmesRouter.post("/filmes", controller.adicionarFilme);
filmesRouter.delete("/filmes/:id", controller.deletarFilme);

export default filmesRouter;