import {
	Entity,
	BaseEntity,
	Column,
    ObjectID, 
    ObjectIdColumn,
	UpdateDateColumn
} from "typeorm";


@Entity()
export class Book extends BaseEntity {

    @ObjectIdColumn()
    id: ObjectID;

    @Column({ length: 200 })
    name: string;

    @Column({ length: 255 })
    isbn: string;

    @Column()
    regDate: Date;
    
    @UpdateDateColumn()
    createdAt: Date;

}


