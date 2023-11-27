import { Component, OnInit } from '@angular/core';

const xAxis = [
  'ديسمبر',
  'نوفمبر',
  'أكتوبر',
  'سبتمبر',
  'أغسطس',
  'يوليو',
  'يونيو',
  'مايو',
  'أبريل',
  'مارس',
  'فبراير',
  'يناير',
];

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrl: './chart2.component.css',
})
export class Chart2Component implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: xAxis,
      datasets: [
        {
          label: '',
          data: [15, 18, 8, 20, 40, 25, 35, 28, 30, 18, 10, 35],
          fill: true,
          borderColor: 'rgba(138,116,249,1)',
          tension: 0.4,
          backgroundColor: 'rgba(138,116,249,0.2)',
        },
      ],
    };

    this.options = {
      maintainAspectRatio: true,
      aspectRatio: 3,
      plugins: {
        legend: {
          display: false,
        },
      },

      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            fontFamily: 'NeoReg',
            font: {
              size: 12,
              family: 'NeoMed',
            },
          },

          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };
  }
}
