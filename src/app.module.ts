import { Module } from '@nestjs/common';
import { DoctorController } from './doctors/doctor.controller';
import { DoctorService } from './doctors/doctor.service';
import { DatabaseModule } from './database/database.modules';

@Module({
  imports: [DatabaseModule],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class AppModule {}
