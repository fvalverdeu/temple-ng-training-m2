import { Component, Input, OnInit } from '@angular/core';

import { IPokemon } from '../../interfaces/pokemon.interface';;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() pokemon: IPokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
