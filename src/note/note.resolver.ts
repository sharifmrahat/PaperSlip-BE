import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema } from 'mongoose';

import { CreateNoteInput, UpdateNoteInput } from './dto/note.input';
import { Note } from './model/note.model';
import { NoteService } from './note.service';

@Resolver(() => Note)
export class NoteResolver {
  constructor(private noteService: NoteService) {}

  @Query(() => Note)
  async note(@Args('_id', { type: () => String }) _id: Schema.Types.ObjectId) {
    return this.noteService.findById(_id);
  }

  @Query(() => [Note])
  async myNotes(
    @Args('userId', { type: () => String }) userId: Schema.Types.ObjectId,
  ) {
    return this.noteService.findAllByUserId(userId);
  }
  // @Query(() => [Note])
  // async notes(
  //     @Args('filters', {nullable: true}) filters?: ListPersonInput,
  // ) {
  //     return this.personService.list(filters);
  // }

  @Mutation(() => Note)
  async createNote(@Args('payload') payload: CreateNoteInput) {
    return this.noteService.create(payload);
  }

  @Mutation(() => Note)
  async updateNote(@Args('payload') payload: UpdateNoteInput) {
    return this.noteService.update(payload);
  }

  @Mutation(() => Note)
  async deleteNote(
    @Args('_id', { type: () => String }) _id: Schema.Types.ObjectId,
  ) {
    return this.noteService.delete(_id);
  }
}
