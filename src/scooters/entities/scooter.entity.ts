import { Ride } from "src/rides/entities/ride.entity";

export class Scooter {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    rides: Ride[];
}
