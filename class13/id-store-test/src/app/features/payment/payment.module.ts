import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { CartView } from './views/cart/cart.view';
import { PaymentComponent } from './payment.component';


@NgModule({
  declarations: [CartView, PaymentComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
