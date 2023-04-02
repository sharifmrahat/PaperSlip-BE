import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field()
  @IsOptional()
  name?: string;

  @Field()
  @IsOptional()
  isSubscribed?: boolean;
}

@InputType()
export class DeleteUserInput {
  @Field()
  @IsNotEmpty()
  userId: string;
}
