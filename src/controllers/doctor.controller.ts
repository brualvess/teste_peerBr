import { Controller, Get } from '@nestjs/common';
import { DoctorService } from '../services';

@Controller('api')
export class DoctorController {
  constructor(private readonly appService: DoctorService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
