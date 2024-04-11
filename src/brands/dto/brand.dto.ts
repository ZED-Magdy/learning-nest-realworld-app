import { Brand } from "../entities/brand.entity";

export class BrandDto {
    id: number;
    name_ar: string;
    name_en: string;

    constructor(brand: Brand) {
        this.id = brand.id;
        this.name_ar = brand.name_ar;
        this.name_en = brand.name_en;
    }
}