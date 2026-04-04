import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
} from '@angular/ssr/node';
import { Request, Response, NextFunction } from 'express';

const angularApp = new AngularNodeAppEngine();

export default async function handler(req: Request, res: Response, next: NextFunction) {
  try {
    // On passe 'next' pour satisfaire les 3 arguments attendus (TS2554)
    // createNodeRequestHandler retourne une fonction qui prend (req, res, next)
    await createNodeRequestHandler(angularApp)(req, res, next);
  } catch (err) {
    // Gestion d'erreur si le rendu échoue
    next(err);
  }
}