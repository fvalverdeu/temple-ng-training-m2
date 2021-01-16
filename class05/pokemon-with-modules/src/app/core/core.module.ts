import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavigationComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
