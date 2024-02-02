import { Component, Input, OnInit } from '@angular/core';
import { DashboardData } from 'src/app/dashboard/dashboard-summary/dashboard-summary.component';

@Component({
  selector: 'app-custom-data-display',
  templateUrl: './custom-data-display.component.html',
  styleUrls: ['./custom-data-display.component.scss'],
})
export class CustomDataDisplayComponent implements OnInit {
  @Input() dashboardData!: DashboardData;
  constructor() {}

  ngOnInit(): void {}
}
