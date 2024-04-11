import { ApiProperty } from "@nestjs/swagger";

export class CreatePlaceDto {
    @ApiProperty()
    name_ar: string;
    @ApiProperty()
    name_en: string;
    @ApiProperty()
    wkt_string: string;
    @ApiProperty()
    color: string;
    @ApiProperty()
    z_index: number;
    @ApiProperty()
    price_list_id: number;
}
