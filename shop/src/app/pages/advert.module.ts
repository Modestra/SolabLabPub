import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';

const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./search/search.component").then(c => c.SearchComponent)
  },
  {
    path: "info",
    loadComponent: () => import("./advert/advert.component").then(c => c.AdvertComponent)
  },
  {
    path: 'me',
    loadComponent: () => import('./my-advert/my-advert.component').then(c => c.MyAdvertComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./createadvert/createadvert.component').then(c => c.CreateadvertComponent)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderComponent
  ],
  exports: [RouterModule]
})
export class AdvertModule { }
