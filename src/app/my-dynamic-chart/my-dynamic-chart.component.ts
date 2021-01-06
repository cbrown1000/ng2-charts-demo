import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-my-dynamic-chart',
  templateUrl: './my-dynamic-chart.component.html',
  styleUrls: ['./my-dynamic-chart.component.css']
})
export class MyDynamicChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor() { }

  // public chartPlugins = [pluginDataLabels];
  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    plugins: {
      datalabels: {
        anchor: 'center', //start, center, end
        align: 'right', //https://chartjs-plugin-datalabels.netlify.app/guide/
        rotation: 90,
        font: {
          size: 10,
        },
        formatter: function(value, context) {
          return context.dataset.label + '--'+ context.chart.data.labels[context.dataIndex] +': '+ value;
        }
      }
    },
    tooltips: {//Need to hover over to get tooltip.  Need a static label
      callbacks: {
          label: function(item, data) {
              return data.datasets[item.datasetIndex].label
                          + ": " + data.datasets[item.datasetIndex].data[item.index];
          }
      }
}
  };

  public chartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

  public chartType = "bar";

  public chartTypes = ['bar', /*'bubble',*/ 'doughnut', 'pie', 'radar', 'horizontalBar'];

  public chartLegend = true;

  public chartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Men' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Women' },
    { data: [28, 82, 30, 9, 86, 55, 44], label: 'Kids' }
  ];


  changeLegend(){
    this.chartLegend = !this.chartLegend;
  }

  addDataSet(){
    // console.log('addDataSet()');
    const dataSetNum = this.chartData.length +1;
    const prevData = this.chartData[this.chartData.length-1];
    const dataSize = prevData.data.length;
    const maxSize = 100;

    const newDataSet = {
      data:[],
      label: 'Series '+ dataSetNum
    };
    for(let i = 0;i<dataSize;i++){
      newDataSet.data.push(Math.floor(Math.random() * maxSize) +1)
    }

    this.chartData.push(newDataSet);
    //this.chart.chart.update();
    this.changeLegend();

    setTimeout( ()=>{//The changeLegend cause a complete redraw
      this.changeLegend();
    },100);
  }

  ngOnInit() {
  }

}
