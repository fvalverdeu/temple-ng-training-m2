import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: IProduct[];

  constructor() { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('cart'));
  }

}
