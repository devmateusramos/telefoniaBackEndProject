import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class calls1642630556274 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'calls',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'origin',
            type: 'int',
          },
          {
            name: 'destiny',
            type: 'int',
          },
          {
            name: 'minutes',
            type: 'int',
          },
          {
            name: 'plan0',
            type: 'int',
          },
          {
            name: 'plan30',
            type: 'int',
          },
          {
            name: 'plan60',
            type: 'int',
          },
          {
            name: 'plan120',
            type: 'int',
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('calls');
  }
}
