import { ArgsType, Field, ID } from '@nestjs/graphql';
import { IsArray, IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

@ArgsType()
export class GetUserArgs {
  @Field(() => ID)
  @IsNotEmpty()
  _id: ObjectId;
}

@ArgsType()
export class GetUsersArgs {
  @Field(() => [ID])
  @IsArray()
  Ids: ObjectId[];
}
