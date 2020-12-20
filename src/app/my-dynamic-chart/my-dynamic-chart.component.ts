import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-my-dynamic-chart',
  templateUrl: './my-dynamic-chart.component.html',
  styleUrls: ['./my-dynamic-chart.component.css']
})
export class MyDynamicChartComponent implements OnInit {

  constructor() { }

  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    plugins: {
      datalabels: {
        anchor: 'center', //start, center, end
        align: 'right', //
        font: {
          size: 10,
        },
        formatter: function(value, context) {
          return context.dataset.label + '--'+ context.chart.data.labels[context.dataIndex] +': '+ value;
        }
      }
    }
  };

  public chartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

  public chartType = "bar";

  public chartTypes = ['bar', 'bubble', 'doughnut', 'pie', 'radar', 'horizontalBar'];

  public chartLegend = true;

  public chartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [28, 82, 30, 9, 86, 55, 44], label: 'Series C' }
  ];

  public chartPlugins = [pluginDataLabels];

  changeLegend(){
    this.chartLegend = !this.chartLegend;
  }

  addDataSet(){
    console.log('addDataSet()');
    let dataSetNum = this.chartData.length +1;
    let prevData = this.chartData[this.chartData.length-1];
    let dataSize = prevData.data.length;
    let maxSize = 100;

    let newDataSet = {
      data:[],
      label: 'Series '+ dataSetNum
    };
    for(let i = 0;i<dataSize;i++){
      newDataSet.data.push(Math.floor(Math.random() * maxSize) +1)
    }
    let _chartData = this.chartData;

    _chartData.unshift(newDataSet);
    this.chartData = _chartData;

  }
  ngOnInit() {
  }

}
