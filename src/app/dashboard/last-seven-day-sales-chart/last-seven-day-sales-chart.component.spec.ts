import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSevenDaySalesChartComponent } from './last-seven-day-sales-chart.component';

describe('LastSevenDaySalesChartComponent', () => {
  let component: LastSevenDaySalesChartComponent;
  let fixture: ComponentFixture<LastSevenDaySalesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastSevenDaySalesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastSevenDaySalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
