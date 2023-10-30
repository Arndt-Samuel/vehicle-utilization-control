import { Controller, Post, Body, Param, Put, Get } from '@nestjs/common';
import { AutomobileUtilizationsService } from './automobile-utilizations.service';
import {
  AutomobileUtilizationCreateDto,
  AutomobileUtilizationsFinalizeDto,
} from './dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AutomobileUtilizationsEntity } from './automobile-utilizations.entity';

@ApiTags('automobile-utilizations')
@Controller('automobile-utilizations')
export class AutomobileUtilizationsController {
  constructor(
    private readonly automobileUtilizationsService: AutomobileUtilizationsService,
  ) {}

  @Post('/')
  @ApiOperation({ summary: 'Create new automobile utilizations' })
  @ApiResponse({
    status: 200,
    description: 'Created new automobile utilizations',
    type: AutomobileUtilizationsEntity,
  })
  async create(
    @Body()
    data: AutomobileUtilizationCreateDto,
  ): Promise<AutomobileUtilizationsEntity> {
    return this.automobileUtilizationsService.create(data);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Finalize automobile utilization' })
  @ApiResponse({
    status: 200,
    description: 'automobile utilization finalized',
    type: AutomobileUtilizationsEntity,
  })
  async finalize(
    @Param('id') automobileUtilizationsId: string,
    @Body()
    data: AutomobileUtilizationsFinalizeDto,
  ): Promise<AutomobileUtilizationsEntity> {
    return this.automobileUtilizationsService.finalize(
      automobileUtilizationsId,
      data,
    );
  }

  @Get('/')
  @ApiOperation({ summary: 'List all automobile utilizations' })
  @ApiResponse({
    status: 200,
    description: 'All automobile utilizations returned',
    type: AutomobileUtilizationsEntity,
    isArray: true,
  })
  async list(): Promise<AutomobileUtilizationsEntity[]> {
    return this.automobileUtilizationsService.list();
  }
}
