import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../interfaces/pokemon.interface';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemons: IPokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getById(638);
  }

  getById(id: number): void {
    this.pokemonService.getById(id).subscribe(response => {
      this.pokemons = response;
      console.log(this.pokemons);
    });
  }

}
