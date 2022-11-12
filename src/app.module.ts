import { Module } from '@nestjs/common';
import { MathModule } from './modules/math/math.module';

@Module({
  imports: [
    MathModule
  ],
})
export class AppModule { }
