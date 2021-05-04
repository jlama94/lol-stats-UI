import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {StackedBarChartComponent} from './stacked-bar-chart/stacked-bar-chart.component';

const routes: Routes = [
  {path: 'stats', component: HomeComponent},
  {path: 'stacked-bar-chart', component: StackedBarChartComponent},
  {path: '', redirectTo: '/stats', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
