import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/features/portal/models/product.model';
import { Cart } from 'src/app/shared/models/cart.model';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsInCart: Subject<void> = new Subject<void>();

  constructor(private storeService: StoreService) { }

  add(product: Product): void {
    let cart: Cart[] = this.storeService.getCart();
    cart = cart.map(item => {
      if (item.id === product._id) {
        item.quantity++;
      }
      return item;
    });
  }

  remove(): void {

  }
}
