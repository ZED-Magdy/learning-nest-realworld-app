import { ApiProperty } from "@nestjs/swagger";
import { MinLength } from "class-validator";

export class CreateBrandDto {
    @ApiProperty()
    @MinLength(3)
    name_ar: string;
    @ApiProperty()
    @MinLength(3)
    name_en: string;
}
