import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MemberDocument = Member & Document;

@Schema()
export class Member {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, uniqe: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  token: string;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
