import { Place } from "src/places/entities/place.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
@Entity()
export class PriceList {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    @Unique(['name_ar'])
    name_ar: string;
    @Column()
    @Unique(['name_en'])
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
