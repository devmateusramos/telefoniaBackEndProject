import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('calls')
export class Calls {
  @PrimaryColumn()
  id: string;

  @Column()
  origin: number;

  @Column()
  destiny: number;

  @Column()
  minutes: number;

  @Column()
  plan0: number;

  @Column()
  plan30: number;

  @Column()
  plan60: number;

  @Column()
  plan120: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
