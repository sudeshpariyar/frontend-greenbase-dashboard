import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOverTimeChartComponent } from './order-over-time-chart.component';

describe('OrderOverTimeChartComponent', () => {
  let component: OrderOverTimeChartComponent;
  let fixture: ComponentFixture<OrderOverTimeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderOverTimeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOverTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
