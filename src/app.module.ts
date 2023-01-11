import { Module } from '@nestjs/common';
import { DoctorController } from './controllers/';
import { DoctorService } from './services';

@Module({
  imports: [],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class AppModule {}
