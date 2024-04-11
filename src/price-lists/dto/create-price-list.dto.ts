import { ApiProperty } from "@nestjs/swagger";
import { Min, MinLength } from "class-validator";

export class CreatePriceListDto {
    @ApiProperty()
    @MinLength(3)
    name_ar: string;
    @MinLength(3)
    @ApiProperty()
    name_en: string;
    @ApiProperty()
    @Min(1)
    starting_cost: number;
    @ApiProperty()
    @Min(0.1)
    minute_cost: number;
}
