export class ShelfModel {
  idNumber: number;
  shelfStart: string;
  shelfEnd: string;


  constructor(idNumber: number, shelfStart: string, shelfEnd: string) {
    this.idNumber = idNumber;
    this.shelfStart = shelfStart;
    this.shelfEnd = shelfEnd;
  }
}
