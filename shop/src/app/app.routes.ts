import { Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SearchComponent } from './pages/search/search.component';

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
        path: 'search',
        component: SearchComponent
    }
];
