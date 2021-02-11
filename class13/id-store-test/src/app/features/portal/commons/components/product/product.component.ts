import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/shared/models/cart.model';
import { Product } from '../../../models/product.model';

import { CartService } from '../../../../../core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  items: number;


  get cartItem(): CartItem {
    return this.setCartItem();
  }
  // constructor(private router: Router, public cartService: CartService) { }
  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    console.log('Producto en el presentador', this.product);
  }

  goToDetail(): void {
    this.router.navigateByUrl(`portal/detail/${this.product._id}`);
  }

  setCartItem(): CartItem {
    const cartItem: CartItem = {
      id: this.product._id,
      name: this.product.name,
      price: this.product.price,
      quantity: 1,
      image: this.product.image
    }
    return cartItem;
  }

  add(): void {
    this.cartService.add(this.cartItem);
  }

  increment(): void {
    this.cartService.add(this.cartItem);
  }

  decrement(): void {
    this.cartService.remove(this.cartItem);
  }
}
