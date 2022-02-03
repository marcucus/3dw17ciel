import { Entity, Column, PrimaryGeneratedColumn, EntityRepository, Repository, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity()
export class Users {
  @ObjectIdColumn()
  _id: ObjectID;

  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ nullable: true })
  url: string;

  @Column()
  public title: string;
 
  @Column({ nullable: true })
  public description: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  updatedAt: Date;
}

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {}