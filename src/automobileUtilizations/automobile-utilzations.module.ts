import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AutomobileUtilizationsService } from './automobile-utilizations.service';
import { AutomobileUtilizationsController } from './automobile-utilizations.controller';
@Module({
  imports: [DatabaseModule],
  providers: [AutomobileUtilizationsService],
  controllers: [AutomobileUtilizationsController],
  exports: [AutomobileUtilizationsService],
})
export class AutomobileUtilizationsModule {}
