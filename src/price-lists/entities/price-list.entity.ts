import { Place } from "src/places/entities/place.entity";
import { Column, CreateDateColumn, DeleteDateColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class PriceList {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name_ar: string;
    @Column()
    name_en: string;
    @Column()
    starting_cost: number;
    @Column()
    minute_cost: number;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
    @OneToMany(() => Place, place => place.price_list)
    places: Place[];
}
