import { Place } from "src/places/entities/place.entity";
import { Ride } from "src/rides/entities/ride.entity";
import { Column, CreateDateColumn, DeleteDateColumn, ManyToOne, Point, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Scooter {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    code: string;
    @Column()
    status: string;
    @Column()
    battery_level: number;
    @Column()
    speed_limit: number;
    @Column()
    last_time_connected: Date;
    @Column()
    current_speed: number;
    @Column(
        "geometry",
        {
            spatialFeatureType: "Point",
            srid: 4326,
        },
    )
    current_location: Point;
    @ManyToOne(() => Place, place => place.scooters)
    place: Place;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
    @ManyToOne(() => Ride, ride => ride.scooter)
    rides: Ride[];
}
