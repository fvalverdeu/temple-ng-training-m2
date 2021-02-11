import { Component, OnInit } from '@angular/core';

import { CartItem } from '../../../../shared/models/cart.model';
import { EIgv } from '../../../../shared/constants/cart.enum';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.view.html',
  styleUrls: ['./cart.view.scss']
})
export class CartView implements OnInit {

  cart: CartItem[];

  constructor() { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  getSubTotal(): string {
    let suma = 0;
    this.cart.forEach(element => {
      suma = suma + (element.price * element.quantity);
    });
    return suma.toString();
  }

  getTotal(): string {
    const subTotal = Number(this.getSubTotal());
    let total = subTotal * EIgv.IGV + subTotal;
    return (total).toString();
  }

}
