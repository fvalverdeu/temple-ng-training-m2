import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { CartView } from './views/cart/cart.view';

const routes: Routes = [
  { path: '', component: PaymentComponent,
    children: [
      { path: 'cart', component: CartView }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
