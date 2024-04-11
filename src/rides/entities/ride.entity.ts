import { Place } from "src/places/entities/place.entity";
import { Scooter } from "src/scooters/entities/scooter.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class Ride {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    total_cost: number;
    @Column()
    distance: number;
    @Column()
    finished_at: Date;
    @Column()
    started_at: Date;
    @Column()
    status: string;
    @ManyToOne(() => Place, place => place.rides)
    place: Place;
    @ManyToOne(() => Scooter, scooter => scooter.rides)
    scooter: Scooter;
    @Column()
    rating: number;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
}
