import { Field, ID, InputType } from '@nestjs/graphql';
import { Schema } from 'mongoose';

@InputType()
export class CreateNoteInput {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  text: string;

  @Field(() => [String], { nullable: true })
  list: string[];

  @Field()
  isActive: boolean;

  @Field(() => ID)
  userId: Schema.Types.ObjectId;

  @Field(() => Date, { defaultValue: new Date(), nullable: true })
  createdAt: Date;

  @Field(() => Date, { defaultValue: new Date(), nullable: true })
  updatedAt: Date;
}

@InputType()
export class UpdateNoteInput extends CreateNoteInput {
  @Field(() => ID)
  _id: Schema.Types.ObjectId;
}
