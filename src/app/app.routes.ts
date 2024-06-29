import { RedirectCommand, Router, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { inject } from '@angular/core';
import { SignInComponent } from './routes/auth/sign-in/sign-in.component';

export const routes: Routes = [
    { path: '', component: SignInComponent },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'redirect',
        component: DashboardComponent,
        canActivate: [
            () => {
                return new RedirectCommand(inject(Router).parseUrl('/error'), {
                    skipLocationChange: false,
                });
            },
        ],
    },
];
