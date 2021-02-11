import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ProductCreateView } from './views/product-create/product-create.view';
import { ProductsListView } from './views/products-list/products-list.view';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'product-list', component: ProductsListView },
      { path: 'product-create', component: ProductCreateView }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
