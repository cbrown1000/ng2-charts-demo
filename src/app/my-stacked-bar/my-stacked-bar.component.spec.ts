import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStackedBarComponent } from './my-stacked-bar.component';

describe('MyStackedBarComponent', () => {
  let component: MyStackedBarComponent;
  let fixture: ComponentFixture<MyStackedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStackedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStackedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
