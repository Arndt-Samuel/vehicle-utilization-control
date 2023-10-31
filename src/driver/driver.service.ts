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
    const driver = await this.prisma.driver.findUnique({
      where: { id },
    });

    if (!driver) {
      throw new Error('Driver not found');
    }

    const deletedDriver = await this.prisma.driver.update({
      where: { id },
      data: { deleted: true },
    });

    return deletedDriver;
  }

  async recover(id: string): Promise<DriverEntity> {
    const driver = await this.prisma.driver.findUnique({
      where: { id },
    });

    if (!driver) {
      throw new Error('Driver not found');
    }

    const recoveredDriver = await this.prisma.driver.update({
      where: { id },
      data: { deleted: false },
    });

    return recoveredDriver;
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
