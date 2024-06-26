import { PriceList } from "src/price-lists/entities/price-list.entity";
import { Ride } from "src/rides/entities/ride.entity";
import { Scooter } from "src/scooters/entities/scooter.entity";
import { Zone } from "src/zones/entities/zone.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, MultiPoint, OneToMany, Polygon, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class Place {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name_ar: string;
    @Column()
    name_en: string;
    @Column("geometry", {
        spatialFeatureType: "Polygon",
        srid: 4326,
    })
    area: Polygon;
    @Column()
    color: string;
    @Column()
    z_index: number;
    @ManyToOne(() => PriceList, price_list => price_list.places)
    @JoinColumn({ name: "price_list_id" })
    price_list: PriceList;
    @OneToMany(() => Zone, zone => zone.place)
    zones: Zone[];
    @OneToMany(() => Scooter, scooter => scooter.place)
    scooters: Scooter[];
    @OneToMany(() => Ride, ride => ride.place)
    rides: Ride[];
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
}
