import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Driver as DriverModel } from '@prisma/client';
import { IsString, IsUUID } from 'class-validator';

export class DriverEntity implements DriverModel {
  @ApiPropertyOptional({
    description: 'UUID generated',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Driver Name',
  })
  @IsString()
  name: string;
}
