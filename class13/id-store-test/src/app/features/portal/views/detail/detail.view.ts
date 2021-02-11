import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../commons/services/product.service';
import { ProductDetail } from '../../models/product-detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.view.html',
  styleUrls: ['./detail.view.scss']
})
export class DetailView implements OnInit {

  productDetail: ProductDetail;
  idProduct: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.idProduct = this.route.snapshot.params.id;
    console.log('id desde URL', this.idProduct);
    this.productService.getById(this.idProduct).subscribe(response => {
      this.productDetail = new ProductDetail(response);
    })
  }

}
