import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [PokemonComponent, CardComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
