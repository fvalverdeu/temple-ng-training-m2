import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule(
  {
    declarations: [AppComponent, HeaderComponent, FooterComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
  }
)
export class AppModule { }
