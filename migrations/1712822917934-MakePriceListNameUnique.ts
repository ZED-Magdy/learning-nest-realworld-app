import { MigrationInterface, QueryRunner } from "typeorm";

export class MakePriceListNameUnique1712822917934 implements MigrationInterface {
    name = 'MakePriceListNameUnique1712822917934'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`price_list\` ADD UNIQUE INDEX \`IDX_ce0c0540539533f464207af370\` (\`name_ar\`)`);
        await queryRunner.query(`ALTER TABLE \`price_list\` ADD UNIQUE INDEX \`IDX_db7a58d40c1d5fbe072f017cc8\` (\`name_en\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`price_list\` DROP INDEX \`IDX_db7a58d40c1d5fbe072f017cc8\``);
        await queryRunner.query(`ALTER TABLE \`price_list\` DROP INDEX \`IDX_ce0c0540539533f464207af370\``);
    }

}
