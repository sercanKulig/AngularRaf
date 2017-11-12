import {ShelfModel} from './shelf.model';

export class BookShelf {
  public idNumber: number;
  public status: boolean;
  public shelf: ShelfModel[];

  constructor(idNumber: number, status: boolean, shelf: ShelfModel[]) {
    this.idNumber = idNumber;
    this.status = status;
    this.shelf = shelf;
  }
}
