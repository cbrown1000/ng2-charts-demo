import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLegendChartComponent } from './my-legend-chart.component';

describe('MyLegendChartComponent', () => {
  let component: MyLegendChartComponent;
  let fixture: ComponentFixture<MyLegendChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLegendChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLegendChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
