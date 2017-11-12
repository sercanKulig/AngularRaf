import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { ShelfComponent } from './bookshelf/shelf/shelf.component';
import {BookShelfService} from './service/bookShelf.service';
import {AppConfig} from "./app.config";
import {RouterModule, Routes} from "@angular/router";
import { LibraryComponent } from './library/library.component';
import { FloorsComponent } from './Library/floors/floors.component';

const appRoutes: Routes = [
  { path: '', component: LibraryComponent},
  { path: 'bookShelf', component: BookshelfComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookshelfComponent,
    ShelfComponent,
    LibraryComponent,
    FloorsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BookShelfService,
    AppConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
