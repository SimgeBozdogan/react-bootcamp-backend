import { Injectable } from '@nestjs/common';
import { Phonebook } from './phonebook.model';

@Injectable()
export class PhonebookService {
  private phonebook: Phonebook[] = [
    { id: 1, name: 'John', surname: 'Doe', phoneNumber: '1234567890' },
    { id: 2, name: 'Jane', surname: 'Smith', phoneNumber: '0987654321' },
    { id: 3, name: 'Alice', surname: 'Johnson', phoneNumber: '2345678901' },
    { id: 4, name: 'Bob', surname: 'Williams', phoneNumber: '3456789012' },
    { id: 5, name: 'Charlie', surname: 'Brown', phoneNumber: '4567890123' },
    { id: 6, name: 'David', surname: 'Jones', phoneNumber: '5678901234' },
    { id: 7, name: 'Ella', surname: 'Garcia', phoneNumber: '6789012345' },
    { id: 8, name: 'Fiona', surname: 'Martinez', phoneNumber: '7890123456' },
    { id: 9, name: 'George', surname: 'Rodriguez', phoneNumber: '8901234567' },
    { id: 10, name: 'Hannah', surname: 'Lee', phoneNumber: '9012345678' },
    { id: 11, name: 'Ian', surname: 'Walker', phoneNumber: '1123456789' },
    { id: 12, name: 'Jack', surname: 'Hall', phoneNumber: '2234567890' },
    { id: 13, name: 'Karen', surname: 'Allen', phoneNumber: '3345678901' },
    { id: 14, name: 'Liam', surname: 'Young', phoneNumber: '4456789012' },
    { id: 15, name: 'Mia', surname: 'King', phoneNumber: '5567890123' },
    { id: 16, name: 'Nathan', surname: 'Wright', phoneNumber: '6678901234' },
    { id: 17, name: 'Olivia', surname: 'Scott', phoneNumber: '7789012345' },
    { id: 18, name: 'Peter', surname: 'Green', phoneNumber: '8890123456' },
    { id: 19, name: 'Quinn', surname: 'Adams', phoneNumber: '9901234567' },
    { id: 20, name: 'Rachel', surname: 'Baker', phoneNumber: '1012345678' },
  ];

  findAll(): Phonebook[] {
    return this.phonebook;
  }

  findOne(id: number): Phonebook {
    return this.phonebook.find((element) => element.id === id);
  }

  create(phonebook: Phonebook) {
    this.phonebook.push(phonebook);
  }

  update(id: number, updatePhonebook: Partial<Phonebook>) {
    const phonebook = this.findOne(id);
    if (phonebook) {
      Object.assign(phonebook, updatePhonebook);
    }
  }

  remove(id: number) {
    this.phonebook = this.phonebook.filter((element) => element.id !== id);
  }
}
