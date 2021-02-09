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


  /*
dateLabels: Array(7)
    0: "2021-01-27"
    1: "2021-01-28"
    2: "2021-01-29"
    3: "2021-01-30"
    4: "2021-01-31"
    5: "2021-02-01"
    6: "2021-02-02"
    length: 7
    __proto__: Array(0)
    response: Array(23)
    0: {data: Array(7), label: "37"}
    1: {data: Array(7), label: "40"}
    2: {data: Array(7), label: "202"}
    3: {data: Array(7), label: "235"}
    4: {data: Array(7), label: "875"}
    5: {data: Array(7), label: "267"}
    6: {data: Array(7), label: "15"}
 */
  setChartData () {
    this.service.getSummonerData().subscribe((value: MatchDataResponse) => {
      const chartDataSet = Object.values(value)[0];
      this.barChartData = chartDataSet;

      const dateLabelsString = Object.values(value)[1];
      this.barChartLabels = dateLabelsString;

      if (this.barChartData != null && this.barChartLabels != null) {
        this.isChartReady = true;
      }
    }, error =>  {
      console.log(error);
    });
  }
}
