import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { Member } from '../schemas/member.schema';
import { CreateMemberDto } from './dto/create-member.dto';
import { get } from 'http';

@Controller('member')
export class MembersController {
  constructor(private membersService: MembersService) {}

  @Get()
  getAllMembers(): Member[] {
    return this.membersService.getAllMembers();
  }

  // @Get('/:email')
  // getUser(@Param('email') email: string) {
  //   return this.membersService.getMember(email);
  // }

  @Get('/findMember/:email' + '/:password')
  async getUser(
    @Param('email') email: string,
    @Param('password') password: string,
  ) {
    console.log(email, password);
    const Ismember: any = await this.membersService.getMember(email);
    if (Ismember == undefined || Ismember == null) return 'the email not exist';

    console.log(Ismember);
    if (Ismember.password == password) {
      return 1;
    }
    return 'the password not true';
  }

  @Post()
  async create(@Body() createMemberDto: CreateMemberDto) {
    await this.membersService.create(createMemberDto);
  }
}
