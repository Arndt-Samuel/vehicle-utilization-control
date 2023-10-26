import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DriverCreateDto, DriverUpdateDto } from './dto';
import { DriverEntity } from './driver.entity';

@Injectable()
export class DriverService {
  constructor(private prisma: PrismaService) {}

  async create(data: DriverCreateDto): Promise<DriverEntity> {
    return this.prisma.driver.create({
      data,
    });
  }

  async list(): Promise<DriverEntity[]> {
    return this.prisma.driver.findMany();
  }

  async findById(id: string): Promise<DriverEntity> {
    return this.prisma.driver.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<DriverEntity> {
    return this.prisma.driver.delete({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: DriverUpdateDto): Promise<DriverEntity> {
    return this.prisma.driver.update({
      where: {
        id,
      },
      data,
    });
  }
}
