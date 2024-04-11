import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { PolygonDto } from "src/common/dto/polygon.dto";
import { PriceListDto } from "src/price-lists/dto/price-list.dto";

export class PlaceDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name_ar: string;
    @ApiProperty()
    name_en: string;
    @ApiProperty()
    area: PolygonDto;
    @ApiProperty({ example: "#FFFFFF" })
    color: string;
    @ApiProperty({ example: 10 })
    z_index: number;
    @ApiProperty()
    priceList: PriceListDto;

    constructor(id: number, name_ar: string, name_en: string, area: PolygonDto, color: string, z_index: number, priceList: PriceListDto) {
        this.id = id;
        this.name_ar = name_ar;
        this.name_en = name_en;
        this.area = area;
        this.color = color;
        this.z_index = z_index;
        this.priceList = priceList;
    }
}