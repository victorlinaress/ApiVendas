import { defaultMaxListeners } from "events";
import { Column, CreateDateColumn, Entity, EntityRepository, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
class User

{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  passoword: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;


}

export default User;
