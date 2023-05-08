import { Request, Response, NextFunction } from "express"

const globalErrorHandlerMW = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
  return res.status(500).send("Something went wrong");
};

export default globalErrorHandlerMW;
