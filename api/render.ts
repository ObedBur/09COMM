import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import { Request, Response } from 'express';
import { join } from 'node:path';

const angularApp = new AngularNodeAppEngine();

export default async function handler(req: Request, res: Response) {
  const result = await (createNodeRequestHandler(angularApp)(req, res));
  return result;
}
