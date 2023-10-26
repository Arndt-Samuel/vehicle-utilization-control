import { Request, Response, NextFunction } from 'express';
import { UnauthorizedException } from '@nestjs/common';

export function plateExists(req: Request, res: Response, next: NextFunction) {
  const checkExistsPlate = this.prisma.automobile.findMany({
    where: { plate: String },
  });

  if (checkExistsPlate === checkExistsPlate) {
    throw new UnauthorizedException();
  }
  next();
}
