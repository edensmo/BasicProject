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
const jwt = require('jsonwebtoken');

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

  @Post('/login')
  async login(@Body() userLogin: any) {
    console.log(userLogin);
    try {
      const user = await this.membersService.getMember(userLogin.email);
      console.log(user);
      if (!user) {
        return 'Incorrect email or password';
      }
      const token = jwt.sign({ user }, 'ahuvia', { expiresIn: '30m' });

      return JSON.stringify({ user, token });
    } catch (err) {
      return 'error';
    }
  }

  @Post()
  async create(@Body() createMemberDto: CreateMemberDto) {
    const user: any = this.membersService.getMember(createMemberDto.email);
    console.log(user);
    if (user.email == createMemberDto.email) {
      return 'Email exist';
    } else {
      await this.membersService.create(createMemberDto);
      return 'welcome';
    }
  }
}
