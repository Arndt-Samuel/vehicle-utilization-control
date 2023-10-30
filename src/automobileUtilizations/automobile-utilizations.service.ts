import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  AutomobileUtilizationCreateDto,
  AutomobileUtilizationsFinalizeDto,
} from './dto';
import { AutomobileUtilizationsEntity } from './automobile-utilizations.entity';

@Injectable()
export class AutomobileUtilizationsService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: AutomobileUtilizationCreateDto,
  ): Promise<AutomobileUtilizationsEntity> {
    const automobileInUse = await this.prisma.automobileUtilizations.findFirst({
      where: { automobileId: data.automobileId, finalDate: null },
    });

    if (automobileInUse) {
      throw new Error('The automobile is in use');
    }

    const driverUsingSomeCar =
      await this.prisma.automobileUtilizations.findFirst({
        where: { driverId: data.driverId, finalDate: null },
      });

    if (driverUsingSomeCar) {
      throw new Error('The driver is already using a car.');
    }

    return this.prisma.automobileUtilizations.create({ data });
  }

  async finalize(
    id: string,
    data: AutomobileUtilizationsFinalizeDto,
  ): Promise<AutomobileUtilizationsEntity> {
    return this.prisma.automobileUtilizations.update({
      where: {
        id,
      },
      data,
    });
  }

  async list(): Promise<AutomobileUtilizationsEntity[]> {
    return this.prisma.automobileUtilizations.findMany();
  }
}
