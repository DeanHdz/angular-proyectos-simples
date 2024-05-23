import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectionComponent } from './direction/direction.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: "/home", component: HomeComponent},
    {path: "/direction", component: DirectionComponent},
    {path: "**", redirectTo: '/home', pathMatch: 'full'} 
];
