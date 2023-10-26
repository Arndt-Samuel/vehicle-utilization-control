import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AutomobileCreateDto, AutomobileUpdateDto } from './dto';
import { AutomobileEntity } from './automobile.entity';

@Injectable()
export class AutomobileService {
  constructor(private prisma: PrismaService) {}

  async create(data: AutomobileCreateDto): Promise<AutomobileEntity> {
    return this.prisma.automobile.create({
      data,
    });
  }

  async findByColorAndBrand(
    color: string,
    brand: string,
  ): Promise<AutomobileEntity[]> {
    const colorExists = await this.prisma.automobile.findFirstOrThrow({
      where: { color },
    });
    if (!colorExists) {
      throw new UnauthorizedException();
    }

    const brandExists = await this.prisma.automobile.findFirstOrThrow({
      where: { brand },
    });
    if (!brandExists) {
      throw new UnauthorizedException();
    }

    return this.prisma.automobile.findMany({ where: { color, brand } });
  }

  async list(): Promise<AutomobileEntity[]> {
    return this.prisma.automobile.findMany();
  }

  async delete(id: string): Promise<AutomobileEntity> {
    return this.prisma.automobile.delete({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    data: AutomobileUpdateDto,
  ): Promise<AutomobileEntity> {
    return this.prisma.automobile.update({
      where: {
        id,
      },
      data,
    });
  }
}
