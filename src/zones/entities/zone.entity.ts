import { Place } from "src/places/entities/place.entity";

export class Zone {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    place: Place;
}
