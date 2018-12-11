import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBindingChartComponent } from './my-binding-chart.component';

describe('MyBindingChartComponent', () => {
  let component: MyBindingChartComponent;
  let fixture: ComponentFixture<MyBindingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBindingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBindingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
