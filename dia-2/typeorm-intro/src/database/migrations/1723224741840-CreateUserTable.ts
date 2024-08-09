import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1723224741840 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'user',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
          length: '24',
        },
        {
          name: 'password',
          type: 'varchar',
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'profile',
          type: 'int',
          isNullable: true,
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const hasTable = await queryRunner.hasTable('users');
    if(hasTable) {
      await queryRunner.dropTable('users');
    }
  }
};