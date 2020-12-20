import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import {MyBindingChartComponent } from './my-binding-chart/my-binding-chart.component';
import { MyStackedBarComponent } from './my-stacked-bar/my-stacked-bar.component';
import { MyDynamicChartComponent } from './my-dynamic-chart/my-dynamic-chart.component';

const routes: Routes = [
  { path: 'bar-chart', component: MyBarChartComponent },
  { path: 'doughnut-chart', component: MyDoughnutChartComponent },
  { path: 'radar-chart', component: MyRadarChartComponent },
  { path: 'pie-chart', component: MyPieChartComponent },
  { path: 'bind-chart', component: MyBindingChartComponent},
  { path: 'stackedBar-chart',component: MyStackedBarComponent},
  { path: 'dynamic-chart', component: MyDynamicChartComponent},
  { path: '**', component:MyBarChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
