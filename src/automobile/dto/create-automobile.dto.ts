import { AutomobileEntity } from '../automobile.entity';
import { PickType } from '@nestjs/swagger';

export class AutomobileCreateDto extends PickType(AutomobileEntity, [
  'plate',
  'color',
  'brand',
]) {}
