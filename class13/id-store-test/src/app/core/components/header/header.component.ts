import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  badge: number = 0;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.itemsInCart.subscribe(value => {
      this.badge = value;
    });
  }

  redirectTo(route: string): void {
    console.log('redirect');
    this.router.navigateByUrl('/portal/' + route);
  }

  goToCart(): void {
    this.router.navigateByUrl('/payment/cart');
  }

}
