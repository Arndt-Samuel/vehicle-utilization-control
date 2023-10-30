import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { AutomobileUtilizationsEntity } from '../automobile-utilizations.entity';
import { PickType } from '@nestjs/swagger';
import { IsOptional, IsDateString, IsUUID, IsString } from 'class-validator';

export class AutomobileUtilizationsFinalizeDto extends PickType(
  AutomobileUtilizationsEntity,
  ['initDate'],
) {
  @ApiProperty({
    description: 'automobile id',
  })
  @IsUUID(undefined, { each: true })
  automobileId: string;

  @ApiProperty({
    description: 'driver id',
  })
  @IsUUID(undefined, { each: true })
  driverId: string;

  @ApiProperty({
    description: 'Final Date',
  })
  @IsDateString()
  finalDate: Date;

  @ApiPropertyOptional({
    description: 'reasonForUse Optional',
  })
  @IsString()
  @IsOptional()
  reasonForUse: string;
}
