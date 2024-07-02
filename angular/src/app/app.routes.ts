import { Routes } from '@angular/router';
import { LoginPageComponent } from './default/login-page/login-page.component';
import { RegisterPageComponent } from './default/register-page/register-page.component';

export const routes: Routes = [
    {
        path: 'login', component: LoginPageComponent
    },
    {
        path: 'register', component: RegisterPageComponent
    }
];
