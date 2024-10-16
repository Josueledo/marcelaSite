import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './components/home/home.component';
import { InicializeComponent } from './components/inicialize/inicialize.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { SaibaComponent } from './components/saiba/saiba.component';

export const routes: Routes = [
  {
    path:"",
    component:InicializeComponent

  },
  {
    path:"home",
    component:HomeComponent
  }
  ,
  {
    path:"feedback",
    component:FeedbackComponent
  }
  ,
  {
    path:"sobre",
    component:SobreComponent
  }
  ,
  {
    path:"saiba",
    component:SaibaComponent
  }
];
