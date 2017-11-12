import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {

  shelfMaxCount: 5;
  bookMaxCount: 10;

  constructor() {

  }
  public getShelfMaxCount() {
    return this.shelfMaxCount;
  }

  public getBookMaxCount() {
    return this.bookMaxCount;
  }
}
