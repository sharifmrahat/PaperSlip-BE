import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema } from 'mongoose';

import { CreateUserInput, UpdateUserInput } from './dto/user.input';
import { User } from './model/user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async user(@Args('_id', { type: () => String }) _id: Schema.Types.ObjectId) {
    return this.userService.findById(_id);
  }
  // @Query(() => [User])
  // async users(
  //     @Args('filters', {nullable: true}) filters?: ListPersonInput,
  // ) {
  //     return this.personService.list(filters);
  // }

  @Mutation(() => User)
  async createUser(@Args('payload') payload: CreateUserInput) {
    return this.userService.create(payload);
  }

  @Mutation(() => User)
  async updateUser(@Args('payload') payload: UpdateUserInput) {
    return this.userService.update(payload);
  }

  @Mutation(() => User)
  async deleteUser(
    @Args('_id', { type: () => String }) _id: Schema.Types.ObjectId,
  ) {
    return this.userService.delete(_id);
  }
}
