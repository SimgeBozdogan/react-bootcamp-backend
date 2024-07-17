import { Test, TestingModule } from '@nestjs/testing';
import { PhonebookService } from './phonebook.service';

describe('PhonebookService', () => {
  let service: PhonebookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhonebookService],
    }).compile();

    service = module.get<PhonebookService>(PhonebookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
