import { GetUserArgs, GetUsersArgs } from './dto/user.args.dto';
import {
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
} from './dto/user.input.dto';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  private repository: User[] = [];

  public createUser(createUserData: CreateUserInput): User {
    const user: User = {
      userId: uuid(),
      ...createUserData,
    };
    this.repository.push(user);
    return user;
  }

  public updateUser(updateUserData: UpdateUserInput): User {
    const user = this.repository.find(
      (user) => user.userId === updateUserData.userId,
    );

    Object.assign(user, updateUserData);

    return user;
  }

  public getUser(getUserArgs: GetUserArgs): User {
    return this.repository.find((user) => user.userId === getUserArgs.userId);
  }

  public getUsers(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs.userIds.map((userId) => this.getUser({ userId }));
  }

  public deleteUser(deleteUserData: DeleteUserInput): User {
    const userIndex = this.repository.findIndex(
      (user) => user.userId === deleteUserData.userId,
    );
    const deletedUser = this.repository[userIndex];
    this.repository.splice(userIndex);
    return deletedUser;
  }
}
