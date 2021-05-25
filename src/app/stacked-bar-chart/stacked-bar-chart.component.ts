import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {MatchesService} from '../httpClient/services/matches.service';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.css']
})
export class StackedBarChartComponent implements OnInit {

  championNames = ['Yone', 'Soraka', 'Teemo'];

  seriesType: 'column';

  chartReady = false;

  subtitle: string;

  constructor(private service: MatchesService) { }

  ngOnInit(): void {
    // this.service.getMatchHistory().subscribe((value => {
    //   console.log(value);
    // }))
  }

  renderChart()
  {

    this.service.getMatchHistory().subscribe(value => {
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
          series: {

          },
          column: {
            stacking: 'percent',
            dataLabels: {
              enabled: true
            },
          }
        },
        series: [
          {
            name: value.win.name,
            type: this.seriesType,
            data: value.win.wins
          },
          {
            name: value.loss.name,
            type: this.seriesType,
            data: value.loss.losses
          }
        ]
      });
    });

  }
}
