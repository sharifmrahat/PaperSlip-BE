import { Field, Int, ObjectType, ID } from '@nestjs/graphql';
import { Prop, SchemaFactory, Schema as SchemaModel } from '@nestjs/mongoose';
import { Schema } from 'mongoose';

// import {Note} from '../hobby/hobby.model';
@ObjectType()
@SchemaModel({ collection: 'users' })
export class User {
  @Field(() => ID)
  _id: Schema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  username: string;

  @Field(() => Int)
  @Prop()
  pin: number;

  @Field()
  @Prop()
  isActive: boolean;

  // @Prop()
  // notes?: Note[];
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
