import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductDetail } from '../../../models/product-detail.model';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {

  formGroup: FormGroup;
  // quantity: FormControl;

  @Input() productDetail: ProductDetail;

  constructor(private cartService: CartService) {
    this.formGroup = new FormGroup({
      quantity: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  addItem(): void {
    console.log(this.formGroup.get('quantity').value);
    const value = this.formGroup.get('quantity').value;
    this.cartService.addItem(this.productDetail._id, value);
  }

}
