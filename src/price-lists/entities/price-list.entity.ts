import { Place } from "src/places/entities/place.entity";

export class PriceList {
    id: number;
    name_ar: string;
    name_en: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    places: Place[];
}
