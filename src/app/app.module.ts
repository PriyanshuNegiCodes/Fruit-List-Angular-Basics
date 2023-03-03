import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './icon/icon.component';
import { FruitContainerComponent } from './fruit-container/fruit-container.component';
import { FruitlistComponent } from './fruitlist/fruitlist.component';
import { SearchComponent } from './search/search.component';
import { FruitCardComponent } from './fruit-card/fruit-card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconComponent,
    FruitContainerComponent,
    FruitlistComponent,
    SearchComponent,
    FruitCardComponent,
    AddCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
