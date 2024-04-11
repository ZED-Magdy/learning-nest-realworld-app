import { Column, CreateDateColumn, DeleteDateColumn, Point, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Station {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name_ar: string;
    @Column()
    name_en: string;
    @Column(
        "geometry",
        {
            spatialFeatureType: "Point",
            srid: 4326,
        },
    )
    location: Point;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
}
