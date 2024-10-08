import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './components/home/home.component';
import { InicializeComponent } from './components/inicialize/inicialize.component';

export const routes: Routes = [
  {
    path:"",
    component:InicializeComponent

  },
  {
    path:"home",
    component:HomeComponent
  }
];
