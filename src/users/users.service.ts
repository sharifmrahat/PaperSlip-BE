import { UserDto } from './dto/user.dto';
// import { User as UserDB, UserDocument } from './schemas/user.schema';
import { GetUserArgs, GetUsersArgs } from './dto/user.args';
import {
  CreateUserInput,
  UpdateUserInput,
  // DeleteUserInput,
} from './dto/user.input';
import { User, UserDocument } from './schema/user.schema';
import { Injectable } from '@nestjs/common';
// import { v4 as uuid } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  // private repository: User[] = [];

  async findOne(userFilterQuery: FilterQuery<GetUserArgs>): Promise<User> {
    return this.userModel.findOne(userFilterQuery);
  }

  async find(userFilterQuery: FilterQuery<GetUsersArgs>): Promise<User[]> {
    return this.userModel.find(userFilterQuery);
  }

  // async createOne(createUserData: CreateUserInput): Promise<User> {
  //   const newUser = new this.userModel(createUserData);
  //   // return this.userModel.create({ ...createUserData });
  //   return newUser.save();
  // }

  async create(createUserDto: CreateUserInput): Promise<UserDto> {
    const createdItem = new this.userModel(createUserDto);
    return (await createdItem.save()) as UserDto;
  }

  async updateOne(
    userFilterQuery: FilterQuery<UpdateUserInput>,
    updatedUser: Partial<User>,
  ): Promise<User> {
    return this.userModel.findOneAndUpdate(userFilterQuery, updatedUser);
  }

  // public createUser(createUserData: CreateUserInput): User {
  //   const user: User = {
  //     userId: uuid(),
  //     ...createUserData,
  //   };
  //   this.repository.push(user);
  //   return user;
  // }

  // public updateUser(updateUserData: UpdateUserInput): User {
  //   const user = this.repository.find(
  //     (user) => user.userId === updateUserData.userId,
  //   );

  //   Object.assign(user, updateUserData);

  //   return user;
  // }

  // public getUser(getUserArgs: GetUserArgs): User {
  //   return this.repository.find((user) => user.userId === getUserArgs.userId);
  // }

  // public getUsers(getUsersArgs: GetUsersArgs): User[] {
  //   return getUsersArgs.userIds.map((userId) => this.getUser({ userId }));
  // }

  // public deleteUser(deleteUserData: DeleteUserInput): User {
  //   const userIndex = this.repository.findIndex(
  //     (user) => user.userId === deleteUserData.userId,
  //   );
  //   const deletedUser = this.repository[userIndex];
  //   this.repository.splice(userIndex);
  //   return deletedUser;
  // }
}
