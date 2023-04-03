import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { Schema } from 'mongoose';
// import {Hobby} from '../hobby/hobby.model';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  username: string;

  @Field(() => Int)
  pin: number;

  @Field()
  isActive: boolean;
}

// export class ListPersonInput {
//     _id?: MongooseSchema.Types.ObjectId;
//     name?: string;
//     hobbies?: Hobby[];
// }
@InputType()
export class UpdateUserInput {
  @Field(() => ID)
  _id: Schema.Types.ObjectId;

  @Field(() => String)
  @IsOptional()
  name?: string;

  @Field(() => String)
  @IsOptional()
  username?: string;

  @Field(() => Int)
  @IsOptional()
  pin?: number;

  @Field()
  @IsOptional()
  isActive?: boolean;
  // hobbies?: Hobby[];
}
