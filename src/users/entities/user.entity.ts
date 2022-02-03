import { Entity, Column, PrimaryGeneratedColumn, EntityRepository, Repository, ObjectID, ObjectIdColumn,} from 'typeorm';

@Entity()
export class Users {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  public email: string;
 
  @Column()
  public password: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  updatedAt: Date;
}

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {}