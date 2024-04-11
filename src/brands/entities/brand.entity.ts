import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    @Unique(['name_ar'])
    name_ar: string;
    @Unique(['name_en'])
    @Column()
    name_en: string;
    @Column()
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
}
