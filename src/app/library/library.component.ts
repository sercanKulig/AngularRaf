import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  private floorCount = [
    1,
    2
    ];

  constructor() { }

  ngOnInit() {
  }

}
