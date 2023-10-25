import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverCreateDto, DriverUpdateDto } from './dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DriverEntity } from './driver.entity';

@ApiTags('driver')
@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get('/')
  @ApiOperation({ summary: 'List all drivers' })
  @ApiResponse({
    status: 200,
    description: 'All drivers returned',
    type: DriverEntity,
    isArray: true,
  })
  async listAll(): Promise<DriverEntity[]> {
    return this.driverService.list();
  }

  @Post('/')
  @ApiOperation({ summary: 'Create new driver' })
  @ApiResponse({
    status: 200,
    description: 'Created new Driver',
    type: DriverEntity,
  })
  async create(
    @Body()
    data: DriverCreateDto,
  ): Promise<DriverEntity> {
    return this.driverService.create(data);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update driver' })
  @ApiResponse({
    status: 200,
    description: 'Driver updated',
    type: DriverEntity,
  })
  async update(
    @Param('id') driverId: string,
    @Body()
    data: DriverUpdateDto,
  ): Promise<DriverEntity> {
    return this.driverService.update(driverId, data);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete driver' })
  @ApiResponse({
    status: 200,
    description: 'Driver deleted',
    type: DriverEntity,
  })
  async delete(@Param('id') driverId: string): Promise<DriverEntity> {
    return this.driverService.delete(driverId);
  }
}
