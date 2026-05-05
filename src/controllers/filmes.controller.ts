import type { Request, Response } from "express";
import * as filmesService from "../services/filmes.service.js";

export const obterFilmes = (req: Request, res: Response): Response => {
  const filmes = filmesService.obterTodosFilmes();
  return res.status(200).json(filmes);
};

export const adicionarFilme = (req: Request, res: Response): Response => {
  const novoFilme = filmesService.adicionarFilme(req.body);
  return res.status(201).json(novoFilme);
};

export const deletarFilme = (req: Request, res: Response): Response => {
  try {
    const id = parseInt(req.params.id);
    filmesService.deletarFilme(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(404).json({
      message: (error as Error).message,
    });
  }
};
