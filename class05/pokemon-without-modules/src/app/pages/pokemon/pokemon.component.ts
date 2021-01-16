import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../../interfaces/pokemon.interface';

import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemons: IPokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.pokemonService.getAll()
    // .pipe()
    .subscribe(response => {
      this.pokemons = response;
      console.log(this.pokemons);
    }, error => console.log(error));
  }

}
