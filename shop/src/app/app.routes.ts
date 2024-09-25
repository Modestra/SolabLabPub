import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './services/guard/authentification.guard';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/mainpage/mainpage.component').then(c => c.MainpageComponent)
            },
            {
                path: "register",
                loadComponent: () => import('./pages/mainpage/mainpage.component').then(c => c.MainpageComponent)
            },
            {
                path: "login",
                loadComponent: () => import('./pages/mainpage/mainpage.component').then(c => c.MainpageComponent)
            },
            {
                path: 'categories',
                loadComponent: () => import('./pages/categories/categories.component').then(c => c.CategoriesComponent)
            },
            {
                path: 'search',
                loadComponent: () => import('./pages/search/search.component').then(c => c.SearchComponent)
            },
            {
                path: 'advert',
                loadChildren: () => import('./pages/advert.module').then(m => m.AdvertModule)
            }
        ]
    },
];
