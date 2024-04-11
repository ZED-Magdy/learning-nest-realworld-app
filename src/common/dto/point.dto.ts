import { ApiProperty } from "@nestjs/swagger";

export class PointDto {
    @ApiProperty()
    latitude: number;
    @ApiProperty()
    longitude: number;

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}