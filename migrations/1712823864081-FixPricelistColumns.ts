import { MigrationInterface, QueryRunner } from "typeorm";

export class FixPricelistColumns1712823864081 implements MigrationInterface {
    name = 'FixPricelistColumns1712823864081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`price_list\` DROP COLUMN \`starting_cost\``);
        await queryRunner.query(`ALTER TABLE \`price_list\` ADD \`starting_cost\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`price_list\` DROP COLUMN \`minute_cost\``);
        await queryRunner.query(`ALTER TABLE \`price_list\` ADD \`minute_cost\` float NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`price_list\` DROP COLUMN \`minute_cost\``);
        await queryRunner.query(`ALTER TABLE \`price_list\` ADD \`minute_cost\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`price_list\` DROP COLUMN \`starting_cost\``);
        await queryRunner.query(`ALTER TABLE \`price_list\` ADD \`starting_cost\` int NOT NULL`);
    }

}
