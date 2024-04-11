import { PrimaryGeneratedColumn } from "typeorm";

export class TransferBalanceRequest {
    @PrimaryGeneratedColumn()
    id: number;
}
