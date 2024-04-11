import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Brand {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name_ar: string;
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
