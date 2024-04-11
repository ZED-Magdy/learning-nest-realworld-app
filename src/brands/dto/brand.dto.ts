import { ApiProperty } from "@nestjs/swagger";
import { Brand } from "../entities/brand.entity";

export class BrandDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name_ar: string;
    @ApiProperty()
    name_en: string;

    constructor(brand: Brand) {
        this.id = brand.id;
        this.name_ar = brand.name_ar;
        this.name_en = brand.name_en;
    }
}