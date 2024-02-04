import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-last-seven-day-sales-chart',
  templateUrl: './last-seven-day-sales-chart.component.html',
  styleUrls: ['./last-seven-day-sales-chart.component.scss'],
})
export class LastSevenDaySalesChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }
  public chart: any;

  createChart() {
    this.chart = new Chart('barChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['12', '13', '14', '15', '16', '17', '18'],
        datasets: [
          {
            data: ['467', '576', '572', '79', '92', '574', '573', '576'],
            backgroundColor: 'rgba(31, 210, 134, 1)',
            barThickness: 8,
            borderRadius: 8,
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
