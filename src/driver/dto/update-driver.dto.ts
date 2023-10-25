import { ApiPropertyOptional } from '@nestjs/swagger';
import { DriverEntity } from '../driver.entity';
import { PickType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class DriverUpdateDto extends PickType(DriverEntity, ['name']) {
  @ApiPropertyOptional({
    description: 'Driver Name',
  })
  @IsString()
  @IsOptional()
  name: string;
}
