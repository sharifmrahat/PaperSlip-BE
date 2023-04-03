import { CreateNoteInput, UpdateNoteInput } from './dto/note.input';
import { Note, NoteDocument } from './model/note.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';

@Injectable()
export class NoteService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  async create(payload: CreateNoteInput) {
    const createdNote = new this.noteModel(payload);
    return createdNote.save();
  }

  findById(_id: Schema.Types.ObjectId) {
    return this.noteModel.findById(_id).exec();
  }

  findAllByUserId(userId: Schema.Types.ObjectId) {
    return this.noteModel.find({ userId: userId });
  }

  update(payload: UpdateNoteInput) {
    return this.noteModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: Schema.Types.ObjectId) {
    return this.noteModel.findByIdAndDelete(_id).exec();
  }
}
