import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Account } from './pages/account/account';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: Home,
    },
    {
        path: 'about',
        title: 'About',
        component: About,
    },
    {
        path: 'account',
        title: 'Account',
        component: Account,
    },
];
