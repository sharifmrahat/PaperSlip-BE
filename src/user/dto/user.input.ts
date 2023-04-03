import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { Schema } from 'mongoose';

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
export class UpdateUserInput extends CreateUserInput {
  @Field(() => ID)
  _id: Schema.Types.ObjectId;
}
