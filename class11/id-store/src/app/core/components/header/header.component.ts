import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  badge: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(route: string): void {
    console.log('redirect');
    this.router.navigateByUrl('/portal/' + route);
  }

  goToCart(): void {
    this.router.navigateByUrl('/payment/cart');
  }

}
