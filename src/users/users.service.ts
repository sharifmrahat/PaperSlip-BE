import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: User[] = [];

  public createUser(): User {}

  public updateUser(): User {}

  public getUser(): User {}

  public getUsers(): [User] {}

  public deleteUser(): User {}
}
