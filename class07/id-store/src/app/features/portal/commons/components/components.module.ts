import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ProductComponent } from './product/product.component';

const COMPONENTS = [
  ProductComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, MaterialModule],
  imports: [
    CommonModule,
    MaterialModule,
    // Módulos de Shared
  ]
})
export class PortalComponentsModule { }
