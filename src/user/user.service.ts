import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';

import { User, UserDocument } from './model/user.model';
import { CreateUserInput, UpdateUserInput } from './dto/user.input';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(payload: CreateUserInput) {
    const userExist = await this.findByUsername(payload.username);
    if (userExist) {
      return new Error(`username '${payload.username}' is already exist!`);
    } else {
      const createdUser = new this.userModel(payload);
      return createdUser.save();
    }
  }

  findById(_id: Schema.Types.ObjectId) {
    return this.userModel.findById(_id).exec();
  }

  findByUsername(username: string) {
    return this.userModel.findOne({ username: username }).exec();
  }

  // list(filters: ListPersonInput) {
  //     return this.userModel.find({...filters}).exec();
  // }

  update(payload: UpdateUserInput) {
    return this.userModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: Schema.Types.ObjectId) {
    return this.userModel.findByIdAndDelete(_id).exec();
  }
}
