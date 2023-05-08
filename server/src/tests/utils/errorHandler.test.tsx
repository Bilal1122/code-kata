import { Request, Response } from 'express';
import { errorHandler } from '../../utils/errorHandler';

describe('errorHandler', () => {
  it('should catch and pass errors to next middleware', async () => {
    const error = new Error('Something went wrong!');
    const mockController = jest.fn().mockRejectedValue(error);
    const mockNextFn = jest.fn();
    const mockReq = {} as Request;
    const mockRes = {} as Response;

    await errorHandler(mockController)(mockReq, mockRes, mockNextFn);
    expect(mockController).toHaveBeenCalledWith(mockReq, mockRes);
    expect(mockNextFn).toHaveBeenCalledWith(error);
  });
});
