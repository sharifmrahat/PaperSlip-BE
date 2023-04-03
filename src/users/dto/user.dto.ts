import { ObjectId } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
@ObjectType()
export class UserDto {
  @Field(() => ID)
  _id: ObjectId;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  isSubscribed?: boolean;
}
