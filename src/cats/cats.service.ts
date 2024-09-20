import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getCats(): string[] {
    return ['Cat1', 'Cat2', 'Cat3'];
  }
}
