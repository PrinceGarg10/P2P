import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from '../common';
import { GeneralController } from './general.controller';
import { GeneralService } from './general.service';

@Module({
  imports: [
    CommonModule,
    MongooseModule.forFeature([])
  ],
  controllers: [GeneralController],
  providers: [GeneralService],
  exports: [GeneralService]
})
export class GeneralModule { }
