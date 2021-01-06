import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyBindingChartComponent } from './my-binding-chart/my-binding-chart.component';
import { MyStackedBarComponent } from './my-stacked-bar/my-stacked-bar.component';
import { DataService } from './service/data.service';
import { MyTableComponent } from './my-table/my-table.component';
import { MyDynamicChartComponent } from './my-dynamic-chart/my-dynamic-chart.component';
import { MyLegendChartComponent } from './my-legend-chart/my-legend-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MyDoughnutChartComponent,
    MyRadarChartComponent,
    MyPieChartComponent,
    MyBindingChartComponent,
    MyStackedBarComponent,
    MyDynamicChartComponent,
    MyLegendChartComponent,
    MyTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
