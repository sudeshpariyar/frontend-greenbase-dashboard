import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-order-over-time-chart',
  templateUrl: './order-over-time-chart.component.html',
  styleUrls: ['./order-over-time-chart.component.scss'],
})
export class OrderOverTimeChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }
  public chart: any;

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line', //this denotes tha type of chart

      data: {
        // values on X-Axis

        labels: [
          '4am',
          '5am',
          '6am',
          '7am',
          '8am',
          '9am',
          '10am',
          '12am',
          '1am',
          '2am',
          '3am',
        ],
        datasets: [
          {
            label: 'May 21',
            borderColor: 'rgba(30, 94, 255, 1)',
            data: [
              '14',
              '61',
              '52',
              '79',
              '92',
              '54',
              '3',
              '5',
              '9',
              '36',
              '10',
            ],
            backgroundColor: 'blue',
          },
          {
            label: 'May 22',
            borderColor: 'rgba(217, 225, 236, 1)',
            data: [
              '52',
              '2',
              '56',
              '37',
              '17',
              '46',
              '53',
              '54',
              '36',
              '14',
              '88',
            ],
            backgroundColor: 'limegreen',
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }
}
