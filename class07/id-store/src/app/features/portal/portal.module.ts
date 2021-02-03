import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { HomeView } from './views/home/home.view';
import { DetailView } from './views/detail/detail.view';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalCommonsModule } from './commons/commons.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../../shared/interceptors/error.interceptor';

@NgModule({
  declarations: [PortalComponent, HomeView, DetailView],
  imports: [
    CommonModule,
    PortalRoutingModule,
    PortalCommonsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class PortalModule { }
