import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartTitleOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {MatchesService} from '../httpClient/services/matches.service';

@Component({
  selector: 'app-league-bar-chart',
  templateUrl: './league-bar-chart.component.html',
  styleUrls: ['./league-bar-chart.component.css']
})

export class LeagueBarChartComponent implements OnInit {

  public barChartLabels: Label[] = []; // should be dates.
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  isChartReady: boolean;


  public barChartData: ChartDataSets[] = [];


  public titleOptions: ChartTitleOptions = {
    text: 'League of Legends Stats',
    display: true,
    position: 'top'
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
          }
        }
      ],

      xAxes: [
        {
          display: true
        }
      ],
      gridLines: {
        lineWidth: 2.0
      }
    }
  };


  constructor (private service: MatchesService) {
  }

  ngOnInit () {
  }


  setData () {
    this.service.getRecentDates().subscribe((stringArray: [string]) => {
      this.barChartLabels = stringArray;
    });

    this.service.getSummonerData().subscribe((value => {
      for (const key of Object.keys(value)) {
        const tempResult = value[key]; // <- [ {data: [1,2,2,3], label: 'Teemo'} ]
        // console.log(tempResult);
        this.barChartData = tempResult;
      }
      if (this.barChartData != null && this.barChartLabels != null) {
        this.isChartReady = true;
      }
    }));
  }
}
