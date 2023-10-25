import { DriverEntity } from '../driver.entity';
import { PickType } from '@nestjs/swagger';

export class DriverCreateDto extends PickType(DriverEntity, ['name']) {}
