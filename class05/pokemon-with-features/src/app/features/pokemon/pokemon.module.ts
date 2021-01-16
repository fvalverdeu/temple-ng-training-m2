import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';



@NgModule({
  declarations: [PokemonComponent, ListComponent, DetailComponent],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
