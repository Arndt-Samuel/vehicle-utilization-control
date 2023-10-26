import { Module } from '@nestjs/common';
import { DriverModule } from './driver';
import { AutomobileModule } from './automobile';
@Module({
  imports: [DriverModule, AutomobileModule],
})
export class AppModule {}
