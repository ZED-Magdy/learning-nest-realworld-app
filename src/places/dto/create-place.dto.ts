import { ApiProperty } from "@nestjs/swagger";
import { IsHexColor, Min, MinLength } from "class-validator";

export class CreatePlaceDto {
    @ApiProperty()
    @MinLength(3)
    name_ar: string;
    @ApiProperty()
    @MinLength(3)
    name_en: string;
    @ApiProperty({ description: 'Well Known Text', example: "POLYGON ((30.0813243 31.0659063, 29.9091643 31.1675298, 29.9526041 31.4071691, 30.020701 31.4542043, 30.1226101 31.4758336, 30.1647692 31.4418447, 30.1781257 31.3209951, 30.1656597 31.214565, 30.0813243 31.0659063))"})
    wkt_string: string|any;
    @ApiProperty()
    @IsHexColor()
    color: string;
    @ApiProperty()
    @Min(1)
    z_index: number;
    @ApiProperty()
    price_list_id: number;
}
