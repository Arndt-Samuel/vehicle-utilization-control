import { ApiPropertyOptional } from '@nestjs/swagger';
import { DriverEntity } from '../driver.entity';
import { PickType } from '@nestjs/swagger';
import { IsOptional, IsBoolean } from 'class-validator';

export class DriverDeleteDto extends PickType(DriverEntity, []) {
  @ApiPropertyOptional({
    description: 'Mark driver as deleted',
  })
  @IsBoolean()
  @IsOptional()
  deleted: boolean;
}
