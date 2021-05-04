import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.css']
})
export class StackedBarChartComponent implements OnInit {

  championNames = ['Yone', 'Soraka', 'Teemo'];

  constructor() { }

  ngOnInit(): void {
  }

  renderChart() {
    Highcharts.chart({
      chart: {
        renderTo: 'container',
        type: 'column',
        style: {
          fontFamily: 'Times New Roman'
        },
        shadow: true
      },
      title: {
        text: 'Wins/Losses',
      },
      subtitle: {
        text: ''
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
      },
      xAxis: {
        categories : this.championNames
      },
      yAxis: {
        title: {
          text: 'Wins/Losses per Champion'
        }
      },
      plotOptions: {
        column: {
          stacking: 'percent',
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [
        {
          name: 'Wins',
          type: 'column',
          data: [3,  1, 7]
        },
        {
          name: 'Losses',
          type: 'column',
          data: [1, 4, 2]
        }
      ]
    });
  }


}
