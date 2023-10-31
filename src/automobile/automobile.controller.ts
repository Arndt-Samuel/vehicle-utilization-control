import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { AutomobileService } from './automobile.service';
import { AutomobileCreateDto, AutomobileUpdateDto } from './dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AutomobileEntity } from './automobile.entity';

@ApiTags('automobile')
@Controller('automobile')
export class AutomobileController {
  constructor(private readonly automobileService: AutomobileService) {}

  @Get('/')
  @ApiOperation({ summary: 'List automobile by color' })
  @ApiResponse({
    status: 200,
    description: 'Automobile returned',
    type: AutomobileEntity,
  })
  async findByColorAndBrand(
    @Query('color') color: string,
    @Query('brand') brand: string,
  ): Promise<AutomobileEntity[]> {
    return this.automobileService.findByColorAndBrand(color, brand);
  }

  @Get('/')
  @ApiOperation({ summary: 'List all automobile' })
  @ApiResponse({
    status: 200,
    description: 'All automobiles returned',
    type: AutomobileEntity,
    isArray: true,
  })
  async listAll(): Promise<AutomobileEntity[]> {
    return this.automobileService.list();
  }

  @Post('/')
  @ApiOperation({ summary: 'Create new automobile' })
  @ApiResponse({
    status: 200,
    description: 'Created new automobile',
    type: AutomobileEntity,
  })
  async create(
    @Body()
    data: AutomobileCreateDto,
  ): Promise<AutomobileEntity> {
    return this.automobileService.create(data);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update automobile' })
  @ApiResponse({
    status: 200,
    description: 'automobile updated',
    type: AutomobileEntity,
  })
  async update(
    @Param('id') automobileId: string,
    @Body()
    data: AutomobileUpdateDto,
  ): Promise<AutomobileEntity> {
    return this.automobileService.update(automobileId, data);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete automobile' })
  @ApiResponse({
    status: 200,
    description: 'Automobile deleted',
    type: AutomobileEntity,
  })
  async delete(@Param('id') automobileId: string): Promise<AutomobileEntity> {
    return this.automobileService.delete(automobileId);
  }

  @Post('/:id/recover')
  @ApiOperation({ summary: 'Recover an automobile' })
  @ApiResponse({
    status: 200,
    description: 'Automobile recovered',
    type: AutomobileEntity,
  })
  async recover(@Param('id') automobileId: string): Promise<AutomobileEntity> {
    return this.automobileService.recover(automobileId);
  }
}
