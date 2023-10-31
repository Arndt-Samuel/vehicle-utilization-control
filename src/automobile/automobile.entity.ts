import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Automobile as AutomobileModel } from '@prisma/client';
import {
  IsString,
  IsUUID,
  Length,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class AutomobileEntity implements AutomobileModel {
  @ApiPropertyOptional({
    description: 'UUID generated',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Automobile license plate',
  })
  @IsString()
  @Length(7)
  plate: string;

  @ApiProperty({
    description: 'Automobile color',
  })
  @IsString()
  color: string;

  @ApiProperty({
    description: 'Automobile brand',
  })
  @IsString()
  brand: string;

  @ApiPropertyOptional({
    description: 'Mark automobile as deleted',
  })
  @IsBoolean()
  @IsOptional()
  deleted: boolean;
}
