import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {

  constructor() { }

  public doughnutChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];//['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];//[120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  ngOnInit() {
  }

}
