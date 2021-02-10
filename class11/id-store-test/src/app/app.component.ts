import { Component, OnInit } from '@angular/core';
import { ICart } from './features/portal/interfaces/cart.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cart: ICart[] = [];
  title = 'id-store';

  ngOnInit(): void {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

}
