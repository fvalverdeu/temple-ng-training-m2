import { Component, OnInit } from '@angular/core';
import { ICart } from './interfaces';

import { IProduct } from './interfaces/product.interface';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shopping-cart';
  products: IProduct[];
  cart: ICart[] = [];
  show: boolean;

  constructor() {

    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    // this.cart = JSON.parse(localstorage.getItem('cart')) || [];
    this.show = false;
  }

  ngOnInit() {
    this.products = [
      { id: 1, name: 'Mascarilla NK95', description: 'Mascarilla con protección de calidad y material durable.', price: 15, img: '' },
      { id: 2, name: 'Mascarilla seis pliegues', description: 'Mascarilla con protección de 6 pliegues. Duración 6 horas.', price: 19, img: '' },
      { id: 3, name: 'Mascarilla Doble Filtro', description: 'Mascarilla con doble filtro para una mejor protección.', price: 15, img: '' },
      { id: 4, name: 'Mascarilla Personalizada', description: 'Mascarilla con diseños personalizados. Se aceptan sus propios diseños.', price: 20, img: '' },
      { id: 5, name: 'Mascarilla Deportiva', description: 'Mascarilla resistente y recomendada para actividad corta al aire libre', price: 15, img: '' },
      { id: 6, name: 'Mascarilla Antialérgica', description: 'Mascarilla con material apropiado para personas que padecen alergias.', price: 20, img: '' }
    ]
  }

  toogleCart() {
    this.show = !this.show;
  }
}
