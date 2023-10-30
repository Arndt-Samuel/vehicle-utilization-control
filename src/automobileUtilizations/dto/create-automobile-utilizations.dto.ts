import { AutomobileUtilizationsEntity } from '../automobile-utilizations.entity';
import { PickType, ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsUUID } from 'class-validator';

export class AutomobileUtilizationCreateDto extends PickType(
  AutomobileUtilizationsEntity,
  ['reasonForUse', 'finalDate'],
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
    description: 'Initial Date',
  })
  @IsDateString()
  initDate: Date;
}
