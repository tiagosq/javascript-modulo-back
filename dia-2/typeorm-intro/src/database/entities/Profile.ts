import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type IProfile = {
  id: number;
  description: string;
  createdAt: Date;
};

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  description: string = '';

  @Column()
  createdAt: Date = new Date();
}