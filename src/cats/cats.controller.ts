import {
  Controller,
  Get,
  Header,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get('docs')
  // @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query() version: number) {
    console.log(version);
    if (version && version === 5) {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('ab*cd')
  findAlls() {
    return 'This route uses a wildcard';
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
