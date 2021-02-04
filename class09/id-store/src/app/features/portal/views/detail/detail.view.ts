import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.view.html',
  styleUrls: ['./detail.view.scss']
})
export class DetailView implements OnInit {

  product: Product;

  constructor() { }

  ngOnInit(): void {
    this.product = JSON.parse(localStorage.getItem('product'));
  }

}
