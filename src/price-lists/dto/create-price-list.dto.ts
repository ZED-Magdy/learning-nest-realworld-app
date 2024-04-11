import { ApiProperty } from "@nestjs/swagger";

export class CreatePriceListDto {
    @ApiProperty()
    name_ar: string;
    @ApiProperty()
    name_en: string;
    @ApiProperty()
    starting_cost: number;
    @ApiProperty()
    minute_cost: number;
}
