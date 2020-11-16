import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { MembersService } from './members.service';
import { Member } from '../schemas/member.schema';
import { CreateMemberDto } from './dto/create-member.dto';

@Controller('members')
export class MembersController {
    constructor(private membersService:MembersService) {}

    @Get()
    getAllMembers() : Member []{
        return this.membersService.getAllMembers();
    }

    @Post()
    async create(@Body() createMemberDto: CreateMemberDto) {
      await this.membersService.create(createMemberDto);
    }

 }
