// import * as mongoose from 'mongoose';

// export const UserSchema = new mongoose.Schema({
//   name: String,

//   email: String,

//   isSubscribed: Boolean,
// });

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type UserDocument = User & Document;
@ObjectType()
@Schema({ collection: 'users' })
export class User {
  @Field(() => ID)
  _id: ObjectId;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  isSubscribed?: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
