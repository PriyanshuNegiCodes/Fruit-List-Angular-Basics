import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './icon/icon.component';
import { FruitContainerComponent } from './fruit-container/fruit-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconComponent,
    FruitContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
