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
                loadComponent: () => import('./pages/search/search.component').then(c => c.SearchComponent),
                children: [
                    {
                        path: 'create',
                        canActivate: [authGuard],
                        loadComponent: () => import('./pages/createadvert/createadvert.component').then(c => c.CreateadvertComponent)
                    },
                    {
                        path: "advert/:id",
                        loadComponent: () => import('./pages/advert/advert.component').then(c => c.AdvertComponent)
                    }
                ]
            }
        ]
    },
];
