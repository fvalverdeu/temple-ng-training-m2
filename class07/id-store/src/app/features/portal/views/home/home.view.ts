import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../commons/services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // console.log('primero', this.productService.getAll());
    this.productService.getAll()
    .subscribe(
      response => {
        this.products = response;
        console.log('products', this.products);
      },
      error =>{
        console.log(error);
        if (error.status === 404) { console.log('error 404')}
      }
    );
    console.log('segundo');
  }

}
