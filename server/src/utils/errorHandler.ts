import { Request, Response, NextFunction } from 'express';

type Controller = (req: Request, res: Response) => Promise<void>;

export const errorHandler = (controller: Controller) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await controller(req, res);
    } catch (error) {
      return next(error);
    }
  };
}
