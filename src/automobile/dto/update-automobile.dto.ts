import { ApiPropertyOptional } from '@nestjs/swagger';
import { AutomobileEntity } from '../automobile.entity';
import { PickType } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class AutomobileUpdateDto extends PickType(AutomobileEntity, [
  'plate',
  'color',
  'brand',
]) {
  @ApiPropertyOptional({
    description: 'update automobile license plate',
  })
  @Length(7)
  @IsString()
  @IsOptional()
  plate: string;

  @ApiPropertyOptional({
    description: 'Update automobile color',
  })
  @IsString()
  @IsOptional()
  color: string;

  @ApiPropertyOptional({
    description: 'Update automobile brand',
  })
  @IsString()
  @IsOptional()
  brand: string;
}
