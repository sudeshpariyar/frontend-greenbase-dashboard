import { Component, OnInit } from '@angular/core';

export interface DashboardData {
  value: number;
  title: string;
  lossGainValue: number;
  gain: boolean;
  priceValue?: boolean;
  icon: string;
}
@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.scss'],
})
export class DashboardSummaryComponent implements OnInit {
  dasData: DashboardData[] = [
    {
      priceValue: true,
      value: 10.456,
      title: 'Total Revenue',
      lossGainValue: 22.45,
      gain: true,
      icon: 'attach_money',
    },
    {
      value: 1456,
      title: 'Orders',
      lossGainValue: 15.45,
      gain: true,
      icon: 'shopping_cart',
    },
    {
      value: 56,
      title: 'Active Sessions',
      lossGainValue: 18.25,
      gain: false,
      icon: 'person_outline',
    },
    {
      value: 456,
      title: 'Total Sessions',
      lossGainValue: 22.45,
      gain: false,
      icon: 'people_outline',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
