import { Module } from '@nestjs/common';
import { PhonebookModule } from './phonebook/phonebook.module';

@Module({
  imports: [PhonebookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
