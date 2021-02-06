import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ProductComponent } from './product/product.component';

import { DefaultImgModule } from '../../../../shared/pipe/default-img/default-img.module';
import { DetailImgComponent } from './detail-img/detail-img.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';

const COMPONENTS = [
  ProductComponent,
  DetailImgComponent,
  DetailInfoComponent
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
