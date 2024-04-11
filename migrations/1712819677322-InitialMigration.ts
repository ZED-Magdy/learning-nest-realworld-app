import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1712819677322 implements MigrationInterface {
    name = 'InitialMigration1712819677322'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`price_list\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name_ar\` varchar(255) NOT NULL, \`name_en\` varchar(255) NOT NULL, \`starting_cost\` int NOT NULL, \`minute_cost\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`scooter\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`battery_level\` int NOT NULL, \`speed_limit\` int NOT NULL, \`last_time_connected\` datetime NOT NULL, \`current_speed\` int NOT NULL, \`current_location\` geometry NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`placeId\` int NULL, \`ridesId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ride\` (\`id\` int NOT NULL AUTO_INCREMENT, \`total_cost\` int NOT NULL, \`distance\` int NOT NULL, \`finished_at\` datetime NOT NULL, \`started_at\` datetime NOT NULL, \`status\` varchar(255) NOT NULL, \`rating\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`placeId\` int NULL, \`scooterId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`place\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name_ar\` varchar(255) NOT NULL, \`name_en\` varchar(255) NOT NULL, \`area\` geometry NOT NULL, \`color\` varchar(255) NOT NULL, \`z_index\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`price_list_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`zone\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name_ar\` varchar(255) NOT NULL, \`name_en\` varchar(255) NOT NULL, \`area\` geometry NOT NULL, \`color\` varchar(255) NOT NULL, \`z_index\` int NOT NULL, \`speed_limit\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`placeId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`station\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name_ar\` varchar(255) NOT NULL, \`name_en\` varchar(255) NOT NULL, \`location\` geometry NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`brand\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name_ar\` varchar(255) NOT NULL, \`name_en\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`brand\` ADD UNIQUE INDEX \`IDX_638c21af1b73944f674c1b6e22\` (\`name_ar\`)`);
        await queryRunner.query(`ALTER TABLE \`brand\` ADD UNIQUE INDEX \`IDX_23d03809754f48396a6ccce4f0\` (\`name_en\`)`);
        await queryRunner.query(`ALTER TABLE \`scooter\` ADD CONSTRAINT \`FK_af1f999b08d670cf6b357676142\` FOREIGN KEY (\`placeId\`) REFERENCES \`place\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`scooter\` ADD CONSTRAINT \`FK_41dc249e38efb2d5606a8522d8e\` FOREIGN KEY (\`ridesId\`) REFERENCES \`ride\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ride\` ADD CONSTRAINT \`FK_f6001e84ee6b661c86364c8b610\` FOREIGN KEY (\`placeId\`) REFERENCES \`place\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ride\` ADD CONSTRAINT \`FK_84a80acde4472c9db618a17c989\` FOREIGN KEY (\`scooterId\`) REFERENCES \`scooter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_508cdd7d9f4f2793d2be5d2cd6e\` FOREIGN KEY (\`price_list_id\`) REFERENCES \`price_list\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`zone\` ADD CONSTRAINT \`FK_4a22d9bdb923b745856b4f27237\` FOREIGN KEY (\`placeId\`) REFERENCES \`place\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`zone\` DROP FOREIGN KEY \`FK_4a22d9bdb923b745856b4f27237\``);
        await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_508cdd7d9f4f2793d2be5d2cd6e\``);
        await queryRunner.query(`ALTER TABLE \`ride\` DROP FOREIGN KEY \`FK_84a80acde4472c9db618a17c989\``);
        await queryRunner.query(`ALTER TABLE \`ride\` DROP FOREIGN KEY \`FK_f6001e84ee6b661c86364c8b610\``);
        await queryRunner.query(`ALTER TABLE \`scooter\` DROP FOREIGN KEY \`FK_41dc249e38efb2d5606a8522d8e\``);
        await queryRunner.query(`ALTER TABLE \`scooter\` DROP FOREIGN KEY \`FK_af1f999b08d670cf6b357676142\``);
        await queryRunner.query(`ALTER TABLE \`brand\` DROP INDEX \`IDX_23d03809754f48396a6ccce4f0\``);
        await queryRunner.query(`ALTER TABLE \`brand\` DROP INDEX \`IDX_638c21af1b73944f674c1b6e22\``);
        await queryRunner.query(`DROP TABLE \`brand\``);
        await queryRunner.query(`DROP TABLE \`station\``);
        await queryRunner.query(`DROP TABLE \`zone\``);
        await queryRunner.query(`DROP TABLE \`place\``);
        await queryRunner.query(`DROP TABLE \`ride\``);
        await queryRunner.query(`DROP TABLE \`scooter\``);
        await queryRunner.query(`DROP TABLE \`price_list\``);
    }

}
