import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeView } from './views/home/home.view';
import { PortalComponent } from './portal.component';
import { DetailView } from './views/detail/detail.view';
import { AboutView } from './views/about/about.view';
import { NotFoundView } from './views/not-found/not-found.view';

const routes: Routes = [
  {
    path: '', component: PortalComponent,
    children: [
      { path: 'home', component: HomeView },
      { path: 'detail', component: DetailView },
      { path: 'about', component: AboutView },
      { path: 'not-found', component: NotFoundView }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
