import { Injectable } from '@nestjs/common';
import { Member } from '../schemas/member.schema';
//import { v4 as uuidv4 } from 'uuid';
import { CreateMemberDto } from './dto/create-member.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MembersService {
  constructor(
    @InjectModel(Member.name) private readonly memberModel: Model<Member>,
  ) {}

  getAllMembers(): Member[] {
    return this.memberModel.find().exec();
  }

  getMember(email: string): Member[] {
    return this.memberModel.findOne({ email: email }).exec();
  }

  async create(createMemberDto: CreateMemberDto): Promise<Member> {
    const createdMember = new this.memberModel(createMemberDto);
    return createdMember.save();
  }
}
