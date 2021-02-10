import { Component, Input, OnInit } from '@angular/core';
import { ProductDetail } from '../../../models/product-detail.model';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {

  @Input() productDetail: ProductDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
