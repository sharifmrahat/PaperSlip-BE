import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, SchemaFactory, Schema as SchemaModel } from '@nestjs/mongoose';
import { Schema } from 'mongoose';

@ObjectType()
@SchemaModel({ collection: 'notes' })
export class Note {
  @Field(() => ID)
  _id: Schema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  title: string;

  @Field(() => String, { nullable: true })
  @Prop()
  text: string;

  @Field(() => [String], { nullable: true })
  @Prop()
  list: string[];

  @Field()
  @Prop()
  isActive: boolean;

  @Field(() => ID)
  @Prop()
  userId: Schema.Types.ObjectId;

  @Field(() => Date, { defaultValue: new Date(), nullable: true })
  @Prop()
  createdAt: Date;

  @Field(() => Date, { defaultValue: new Date(), nullable: true })
  @Prop()
  updatedAt: Date;
}

export type NoteDocument = Note & Document;

export const NoteSchema = SchemaFactory.createForClass(Note);
