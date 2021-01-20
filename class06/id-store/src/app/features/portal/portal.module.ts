import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { HomeView } from './views/home/home.view';
import { DetailView } from './views/detail/detail.view';

import { PortalRoutingModule } from './portal-routing.module'

@NgModule({
  declarations: [PortalComponent, HomeView, DetailView],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
