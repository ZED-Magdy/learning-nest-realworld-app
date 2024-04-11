import { ApiProperty } from "@nestjs/swagger";

export class CreateBrandDto {
    @ApiProperty()
    readonly name_ar: string;
    @ApiProperty()
    readonly name_en: string;
}
