import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PhonebookService } from './phonebook.service';
import { Phonebook } from './phonebook.model';

@Controller('phonebook')
export class PhonebookController {
  constructor(private readonly phonebookService: PhonebookService) {}

  @Get()
  findAll() {
    return this.phonebookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.phonebookService.findOne(+id);
  }

  @Post()
  create(@Body() phonebook: Phonebook) {
    this.phonebookService.create(phonebook);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePhonebook: Partial<Phonebook>) {
    this.phonebookService.update(+id, updatePhonebook);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.phonebookService.remove(+id);
  }
}
