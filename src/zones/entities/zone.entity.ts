import { Place } from "src/places/entities/place.entity";
import { Column, CreateDateColumn, DeleteDateColumn, ManyToOne, Polygon, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Zone {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name_ar: string;
    @Column()
    name_en: string;
    @Column(
        "geometry",
        {
            spatialFeatureType: "Polygon",
            srid: 4326,
        },
    )
    area: Polygon;
    @Column()
    color: string;
    @Column()
    z_index: number;
    @Column()
    speed_limit: number;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
    @ManyToOne(() => Place, place => place.zones)
    place: Place;
}
