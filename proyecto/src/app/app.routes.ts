import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: "inicio", component: HomePage},
    {path: "**", redirectTo: 'inicio', pathMatch: 'full'} 

    //En inicio, al hacer click en un enlace del navbar, se utiliza este archivo en conjunto al "#" de referencia para redirigir a la seccion correspondiente
];
