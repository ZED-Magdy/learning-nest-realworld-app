import { ApiProperty } from "@nestjs/swagger";
import { PointDto } from "./point.dto";
import { Polygon } from "typeorm";
import { parseFromWK } from "wkt-parser-helper";

export class PolygonDto {
    @ApiProperty()
    type = "Polygon";
    @ApiProperty()
    coordinates: PointDto[];

    constructor(wkt: any) {
        const polygon = parseFromWK(wkt) as Polygon;
        this.coordinates = polygon.coordinates.map(coord => coord.map(point => new PointDto(point[0], point[1])))[0];
    }
}