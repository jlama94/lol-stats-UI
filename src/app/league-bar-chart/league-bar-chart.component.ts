import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartTitleOptions, ChartType} from 'chart.js';
import {MatchesService} from '../httpClient/services/matches.service';
import {MatchDataResponse} from '../model/MatchDataResponse';

@Component({
  selector: 'app-league-bar-chart',
  templateUrl: './league-bar-chart.component.html',
  styleUrls: ['./league-bar-chart.component.css']
})

export class LeagueBarChartComponent implements OnInit {

  public barChartLabels: string[] = []; // should be dates.
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  isChartReady: boolean;


  public barChartData: ChartDataSets[] = [];


  public titleOptions: ChartTitleOptions = {
    text: 'Champions Played in the Past Seven Days',
    display: true,
    position: 'top',
    fontSize: 20
  };


  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    title: this.titleOptions,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            /*
              This function
              Change the Y-axis values from real numbers to integers in Chart.js
              https://stackoverflow.com/a/38945591/6029771
             */
            callback (value: any, index: any, values: any): string | number {
              if (value % 1 === 0) {
                return value;
              }
            }
          },
          display: true
        }
      ],

      xAxes: [
        {
          display: true
        }
      ],
      gridLines: {
        lineWidth: 3.0
      }
    }
  };


  constructor (private service: MatchesService) {
  }

  ngOnInit () {
  }


  setChartData () {
    this.service.getSummonerData().subscribe((value: MatchDataResponse) => {
      const chartDataSet = Object.values(value)[0];
      this.barChartData = chartDataSet;

      const dateLabelsString = Object.values(value)[1];
      this.barChartLabels = dateLabelsString;

      if (this.barChartData != null && this.barChartLabels != null) {
        this.isChartReady = true;
      }
    }, error => {
      console.log(error);
    });
  }
}
