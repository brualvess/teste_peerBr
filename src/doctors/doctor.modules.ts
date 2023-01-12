import { Module } from '@nestjs/common';
import { DoctorController } from '../doctors/doctor.controller';
import { DoctorService } from '../doctors/doctor.service';

@Module({
  imports: [],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}
