import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SearchComponent } from './pages/search/search.component';
import { CreateadvertComponent } from './pages/createadvert/createadvert.component';
import { AdvertComponent } from './pages/advert/advert.component';

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
                path: 'advert',
                loadComponent: () => import('./pages/search/search.component').then(c => c.SearchComponent),
                children: [
                    {
                        path: 'create',
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
