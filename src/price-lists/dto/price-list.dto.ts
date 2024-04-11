import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { PriceList } from "../entities/price-list.entity";

export class PriceListDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name_ar: string;
  @ApiProperty()
  name_en: string;
  @ApiProperty()
  minute_cost: number;
  @ApiProperty()
  starting_cost: number;

  constructor(priceList: PriceList) {
    this.id = priceList.id;
    this.name_ar = priceList.name_ar;
    this.name_en = priceList.name_en;
    this.minute_cost = priceList.minute_cost;
    this.starting_cost = priceList.starting_cost;
  }
}