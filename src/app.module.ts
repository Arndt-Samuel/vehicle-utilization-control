import { Module } from '@nestjs/common';
import { DriverModule } from './driver';
import { AutomobileModule } from './automobile';
import { AutomobileUtilizationsModule } from './automobileUtilizations';
@Module({
  imports: [DriverModule, AutomobileModule, AutomobileUtilizationsModule],
})
export class AppModule {}
