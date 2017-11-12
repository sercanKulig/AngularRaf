import { Component, OnInit } from '@angular/core';
import {ShelfModel} from '../../model/shelf.model';
import {BookShelfService} from 'app/service/bookShelf.service';
import {AppConfig} from '../../app.config';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {
  shelf: ShelfModel[];
  constructor(private bookShelfService: BookShelfService,
              private configs: AppConfig) { }

  ngOnInit() {
    this.bookShelfService.getBookShelfs()
      .filter( m => m.status === true)
      .map(n => n.shelf)
      .forEach((ids) => {
        this.shelf = ids;
      });
  }

}
