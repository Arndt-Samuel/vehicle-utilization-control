import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AutomobileService } from './automobile.service';
import { AutomobileController } from './automobile.controller';
@Module({
  imports: [DatabaseModule],
  providers: [AutomobileService],
  controllers: [AutomobileController],
  exports: [AutomobileService],
})
export class AutomobileModule {}
