import { Module } from "@nestjs/common";
import { MathController } from "./math.controller";

@Module({
    imports: [MathController]
})
export class MathModule { }