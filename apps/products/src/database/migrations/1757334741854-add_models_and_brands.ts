import { MigrationInterface, QueryRunner } from "typeorm";

export class AddModelsAndBrands1757334741854 implements MigrationInterface {
    name = 'AddModelsAndBrands1757334741854'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`brands\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`models\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`brand_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`brand\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`model\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`image_url\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`price\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`modelsId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`models\` ADD CONSTRAINT \`FK_f2b1673c6665816ff753e81d1a0\` FOREIGN KEY (\`brand_id\`) REFERENCES \`brands\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_fd76e3b8d5f51227217f923649c\` FOREIGN KEY (\`modelsId\`) REFERENCES \`models\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_fd76e3b8d5f51227217f923649c\``);
        await queryRunner.query(`ALTER TABLE \`models\` DROP FOREIGN KEY \`FK_f2b1673c6665816ff753e81d1a0\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`modelsId\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`image_url\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`model\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`brand\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`models\``);
        await queryRunner.query(`DROP TABLE \`brands\``);
    }

}
