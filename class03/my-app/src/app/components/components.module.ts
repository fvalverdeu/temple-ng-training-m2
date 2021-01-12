import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserComponent } from './user/user.component';

import { UserModule } from './user/user.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  exports: [ProductComponent, ProductListComponent, UserModule],
  imports: [
    CommonModule,
    // UserModule
  ]
})
export class ComponentsModule { }
