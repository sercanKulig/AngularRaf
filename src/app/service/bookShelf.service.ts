import {Injectable} from '@angular/core';
import {BookShelf} from '../model/bookShelf.model';
import {ShelfModel} from '../model/shelf.model';

@Injectable()
export class BookShelfService {
  private bookShelf: BookShelf[] = [
    new BookShelf(
      1,
      true,
      [
        new ShelfModel(0, 'A', 'B'),
        new ShelfModel(1, 'A', 'B'),
        new ShelfModel(2, 'A', 'B'),
        new ShelfModel(3, 'A', 'B'),
        new ShelfModel(4, 'A', 'B'),
        new ShelfModel(5, 'A', 'B'),
        new ShelfModel(6, 'A', 'B'),
        new ShelfModel(6, 'A', 'B'),
        new ShelfModel(6, 'A', 'B'),
        new ShelfModel(6, 'A', 'B'),
        new ShelfModel(6, 'A', 'B'),
        new ShelfModel(6, 'A', 'B')
      ]
    ),
    new BookShelf(
      2,
      false,
      [
        new ShelfModel(1, 'B', 'C'),
      ]
    )
  ];

  constructor() {}

  getBookShelfs() {
    return this.bookShelf.slice();
  }

  getShelfs(id: number) {
    return this.bookShelf[id].shelf.slice();
  }
}
