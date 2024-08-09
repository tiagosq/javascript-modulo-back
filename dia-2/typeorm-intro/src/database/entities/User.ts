import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IProfile, Profile } from "./Profile";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  email: string = '';

  @Column()
  password: string = '';

  @Column()
  createdAt: Date = new Date();

  // @OneToOne(() => Profile, profile => profile.id)
  // @JoinColumn()
  @ManyToMany(() => Profile, {
    cascade: true,
  })
  @JoinTable()
  profile: Profile[] | undefined;
}