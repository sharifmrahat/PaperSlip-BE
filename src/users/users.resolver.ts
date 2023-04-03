import { UserDto } from './dto/user.dto';
import {
  CreateUserInput,
  // UpdateUserInput,
  // DeleteUserInput,
} from './dto/user.input';
import { GetUserArgs, GetUsersArgs } from './dto/user.args';
import { UsersService } from './users.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './schema/user.schema';
// import { User as UserDB, UserDocument } from './schemas/user.schema';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: 'findUser', nullable: true })
  async getUser(@Args() getUserArgs: GetUserArgs): Promise<User> {
    return await this.usersService.findOne(getUserArgs);
  }

  @Query(() => [User], { name: 'findUsers', nullable: 'items' })
  async getUsers(@Args() getUsersArgs: GetUsersArgs): Promise<User[]> {
    return await this.usersService.find(getUsersArgs);
  }

  // @Mutation(() => User)
  // async createUser(
  //   @Args('createUserData') createUserData: CreateUserInput,
  // ): Promise<UserDto> {
  //   return await this.usersService.create(createUserData);
  // }
  @Mutation(() => UserDto)
  async createUser(@Args('input') input: CreateUserInput): Promise<UserDto> {
    return this.usersService.create(input);
  }

  // @Mutation(() => Company)
  // async companyCreate(
  //   @Args('input') input: CreateCompanyInput,
  //   @Context('req') context: RequestWithUser,
  // ) {
  //   return this.companyService.create(input, context);
  // }

  // @Query(() => [User], { name: 'users', nullable: 'items' })
  // getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
  //   return this.usersService.getUsers(getUsersArgs);
  // }

  // @Mutation(() => User)
  // createUser(@Args('createUserData') createUserData: CreateUserInput): User {
  //   return this.usersService.createUser(createUserData);
  // }

  // @Mutation(() => User)
  // updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
  //   return this.usersService.updateUser(updateUserData);
  // }

  // @Mutation(() => User)
  // deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
  //   return this.usersService.deleteUser(deleteUserData);
  // }
}
