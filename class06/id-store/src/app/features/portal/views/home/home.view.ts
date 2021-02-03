import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../commons/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // console.log('primero', this.productService.getAll());
    this.productService.getAll().subscribe(response => {
      console.log('primero', response);
    })
    console.log('segundo');
  }

}
