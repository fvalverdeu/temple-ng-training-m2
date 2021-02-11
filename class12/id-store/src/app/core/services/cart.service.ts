import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from 'src/app/shared/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[];
  itemsInCart: Subject<number> = new Subject<number>();
  quantity: number = 0;

  constructor() { }

  addItem(id: string, quantity: number): void {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.cart.forEach(item => {
      if (item.id === id) {
        item.quantity = item.quantity + quantity;
      }
    });
    this.sendQuantity();
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  add(cartItem: CartItem): void {
    let isExist = false;
    this.cart = JSON.parse(localStorage.getItem('cart'));
    if (this.cart && this.cart.length > 0) {
      this.cart.forEach(item => {
        if (item.id === cartItem.id) {
          item.quantity = item.quantity + 1;
          isExist = true;
        }
      });
      if (!isExist) {
        this.cart.push(cartItem);
      }
    } else {
      this.cart = [cartItem];
    }
    this.sendQuantity();
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  remove(cartItem: CartItem): void {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    if (this.cart && this.cart.length > 0) {
      this.cart.forEach(item => {
        if (item.id === cartItem.id && item.quantity > 0) {
          item.quantity = item.quantity - 1;
        } else if (this.quantity === 0) {
          // this.cart = this.cart.find(item => item.id != cartItem.id)
        }
      });
    }
    this.sendQuantity();
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private sendQuantity(): void {
    this.quantity = 0;
    this.cart.forEach(item => {
      this.quantity = this.quantity + item.quantity;
    });
    this.itemsInCart.next(this.quantity);
  }

}
