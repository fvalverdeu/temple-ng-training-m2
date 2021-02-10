import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { ICart } from '../../../interfaces/cart.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  cart: ICart[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('Producto en el presentador', this.product);
  }

  add(): void {
    let isExist = false;
    this.cart = JSON.parse(localStorage.getItem('cart'));
    if (this.cart && this.cart.length > 0) {
      this.cart.forEach(item => {
        if (item.id === this.product._id) {
          item.quantity = item.quantity + 1;
          isExist = true;
        }
      });
      if (!isExist) {
        this.cart.push({ id: this.product._id, name: this.product.name, price: this.product.price, quantity: 1 });
      }
    } else {
      this.cart = [{ id: this.product._id, name: this.product.name, price: this.product.price, quantity: 1 }];
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  goToDetail(): void {
    this.router.navigateByUrl(`portal/detail/${this.product._id}`);
  }

  increment(): void {
    let isExist = false;
    this.cart = JSON.parse(localStorage.getItem('cart'));
    if (this.cart && this.cart.length > 0) {
      this.cart.forEach(item => {
        if (item.id === this.product._id) {
          item.quantity = item.quantity + 1;
          isExist = true;
        }
      });
      if (!isExist) {
        this.cart.push({ id: this.product._id, name: this.product.name, price: this.product.price, quantity: 1 });
      }
    } else {
      this.cart = [{ id: this.product._id, name: this.product.name, price: this.product.price, quantity: 1 }];
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  decrement(): void {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    if (this.cart && this.cart.length > 0) {
      this.cart.forEach(item => {
        if (item.id === this.product._id && item.quantity > 0) {
          item.quantity = item.quantity - 1;
        }
      });
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
