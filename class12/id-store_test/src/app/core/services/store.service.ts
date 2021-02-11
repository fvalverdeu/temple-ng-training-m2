import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private keyCart: string = 'cart';

  constructor() { }

  setCart(arrayCart: Cart[]): void {
    localStorage.setItem(this.keyCart, JSON.stringify(arrayCart));
  }

  getCart(): Cart[] {
    return JSON.parse(localStorage.getItem(this.keyCart));
  }
}
