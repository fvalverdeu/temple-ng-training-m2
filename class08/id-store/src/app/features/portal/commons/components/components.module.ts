import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ProductComponent } from './product/product.component';

import { DefaultImgModule } from '../../../../shared/pipe/default-img/default-img.module';

const COMPONENTS = [
  ProductComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, MaterialModule],
  imports: [
    CommonModule,
    MaterialModule,
    DefaultImgModule
    // Módulos de Shared
  ]
})
export class PortalComponentsModule { }
