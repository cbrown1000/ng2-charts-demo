import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-binding-chart',
  templateUrl: './my-binding-chart.component.html',
  styleUrls: ['./my-binding-chart.component.css']
})
export class MyBindingChartComponent implements OnInit {

  constructor() { }

  pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  pieChartData = [120, 150, 180, 90];
  pieChartType = 'pie';

  ngOnInit() {
  }

  public randomize(): void{
    let _pieChartData: Array<any> = new Array(this.pieChartData.length);
    for(let i = 0;i<this.pieChartData.length;i++){
      _pieChartData[i] = Math.floor((Math.random() * 500)+1);
    }

    this.pieChartData = _pieChartData;
  }

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    }
  
}
