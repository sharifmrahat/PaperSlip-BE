import { Field, ID, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

@InputType()
export class UpdateUserInput {
  @Field(() => ID)
  @IsNotEmpty()
  _id: ObjectId;

  @Field()
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  isSubscribed?: boolean;
}

@InputType()
export class DeleteUserInput {
  @Field(() => ID)
  @IsNotEmpty()
  _id: ObjectId;
}
