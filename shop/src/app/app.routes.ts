import { Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SearchComponent } from './pages/search/search.component';
import { CreateadvertComponent } from './pages/createadvert/createadvert.component';
import { AdvertComponent } from './pages/advert/advert.component';

export const routes: Routes = [
    {
        path: "",
        component: MainpageComponent
    },
    {
        path: "register",
        component: MainpageComponent
    },
    {
        path: "login",
        component: MainpageComponent
    },
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'advert',
        component: SearchComponent,
    },
    {
        path: "advert/:id",
        component: AdvertComponent
    },
    {
        path: 'advert/:id/create',
        component: CreateadvertComponent
    }
];
