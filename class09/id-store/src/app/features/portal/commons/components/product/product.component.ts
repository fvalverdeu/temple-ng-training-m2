import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('Producto en el presentador', this.product);
  }

  add(): void {
    localStorage.setItem('product', JSON.stringify(this.product));
    this.router.navigateByUrl('portal/detail');
  }

}
