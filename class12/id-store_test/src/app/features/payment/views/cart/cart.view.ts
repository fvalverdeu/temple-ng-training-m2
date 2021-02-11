import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/features/portal/interfaces/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.view.html',
  styleUrls: ['./cart.view.scss']
})
export class CartView implements OnInit {

  cart: ICart[];

  constructor() { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

}
