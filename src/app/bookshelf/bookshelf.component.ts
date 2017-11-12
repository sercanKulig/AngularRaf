import {Component, Input, OnInit} from '@angular/core';
import {BookShelf} from '../model/bookShelf.model';
import {BookShelfService} from '../service/bookShelf.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  @Input() bookShelf: BookShelf[];

  constructor(private bookShelfService: BookShelfService) { }

  ngOnInit() {
    this.bookShelf = this.bookShelfService.getBookShelfs();
  }

}
