import {Injectable} from '@angular/core';
import {ShelfModel} from '../model/shelf.model';

@Injectable()
export class ShelfService {
  private shelf: ShelfModel[] = [
    new ShelfModel(
      1,
      'A',
      'B'
    ),
    new ShelfModel(
      2,
      'B',
      'C'
    ),
    new ShelfModel(
      3,
      'C',
      'D'
    ),
    new ShelfModel(
      4,
      'D',
      'E'
    )
  ];

  constructor() {}

  getShelf() {
    return this.shelf.slice();
  }
}
