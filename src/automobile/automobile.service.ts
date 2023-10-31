import { Injectable } from '@nestjs/common';
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
    return this.prisma.automobile.findMany({
      where: { color, brand },
    });
  }

  async list(): Promise<AutomobileEntity[]> {
    return this.prisma.automobile.findMany();
  }

  async delete(id: string): Promise<AutomobileEntity> {
    return this.prisma.automobile.update({
      where: { id },
      data: { deleted: true },
    });
  }

  async recover(id: string): Promise<AutomobileEntity> {
    const automobile = await this.prisma.automobile.findUnique({
      where: { id },
    });

    if (!automobile) {
      throw new Error('Automobile not found');
    }

    const recoveredAutomobile = await this.prisma.automobile.update({
      where: { id },
      data: { deleted: false },
    });

    return recoveredAutomobile;
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
