import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { routing } from './app.routing';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryListingComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
