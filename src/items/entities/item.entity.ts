import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({name: 'items'})
@ObjectType()
export class Item {
  
  @PrimaryGeneratedColumn('uuid') //* Si no le ponemows lo de 'uuid' genera un codigio secuencial autoincremental
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  name: string;
  
  @Column()
  @Field(() => Float)
  quantity: number;

  @Column({nullable: true}) //* Se especifica a nivel de ORM 
  @Field(() => String, {nullable: true}) //* Se especifica a graphql
  quantityUnits?: string; //* Se especifica a typescript

}
