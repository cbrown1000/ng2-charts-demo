import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-stacked-bar',
  templateUrl: './my-stacked-bar.component.html',
  styleUrls: ['./my-stacked-bar.component.css']
})
export class MyStackedBarComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    events: ['click'],
    scales: {
      xAxes: [{
        stacked: true,
      }],
      yAxes: [{
        stacked: true
      }]
    }
  }

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

  public barChartType = "horizontalBar";

  public barChartLegend = true;

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'In Work' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Approved' }
  ];

  ngOnInit() {
  }
    // events
    public chartClicked(e:any):void {
      //console.log(e);

      if(e.active.length > 0){
        const chart = e.active[0]._chart;
        const activePoints = chart.getElementAtEvent(e.event);
        if(activePoints.length > 0){
          const elementIndex = activePoints[0]._index;
          const datasetIndex = activePoints[0]._datasetIndex;
          const datasetLabel = activePoints[0]._model.datasetLabel;
          const label = chart.data.labels[elementIndex];
          const value = chart.data.datasets[datasetIndex].data[elementIndex];
          console.log(datasetLabel, label, value);
  
        }
  
      }
    }
   
    // public chartHovered(e:any):void {
    //   console.log(e);
    // }


}
