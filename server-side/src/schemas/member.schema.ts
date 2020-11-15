import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MemberDocument = Member & Document;

@Schema()
export class Member {
  @Prop({ required: true })
  name: string;

}

export const MemberSchema = SchemaFactory.createForClass(Member);