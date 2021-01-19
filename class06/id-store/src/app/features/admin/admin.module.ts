import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsListView } from './views/products-list/products-list.view';
import { ProductCreateView } from './views/product-create/product-create.view';


@NgModule({
  declarations: [ProductsListView, ProductCreateView],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
