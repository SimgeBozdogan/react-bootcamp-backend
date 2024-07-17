import { Module } from '@nestjs/common';
import { PhonebookService } from './phonebook.service';
import { PhonebookController } from './phonebook.controller';

@Module({
  providers: [PhonebookService],
  controllers: [PhonebookController]
})
export class PhonebookModule {}
