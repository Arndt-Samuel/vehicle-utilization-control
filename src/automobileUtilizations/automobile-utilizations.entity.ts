import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AutomobileUtilizations as AutomobileUtilizationsModel } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDateString, IsString, IsUUID } from 'class-validator';
import { AutomobileEntity } from 'src/automobile/automobile.entity';
import { DriverEntity } from 'src/driver/driver.entity';

export class AutomobileUtilizationsEntity
  implements AutomobileUtilizationsModel
{
  @ApiPropertyOptional({
    description: 'UUID generated',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'automobile initial date utilization',
  })
  @IsDateString()
  initDate: Date;

  @ApiPropertyOptional({
    description: 'automobile initial date utilization',
  })
  @IsDateString()
  finalDate: Date;

  @ApiPropertyOptional({
    description: 'automobile initial date utilization',
  })
  @IsString()
  reasonForUse: string;

  @ApiProperty({
    description: 'Driver UUID',
    type: () => DriverEntity,
  })
  @IsUUID()
  @Type(() => DriverEntity)
  driverId: string;

  @ApiProperty({
    description: 'Automobile UUID',
    type: () => AutomobileEntity,
  })
  @IsUUID()
  @Type(() => AutomobileEntity)
  automobileId: string;
}
