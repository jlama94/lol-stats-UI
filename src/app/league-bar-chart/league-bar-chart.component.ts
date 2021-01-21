import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {MatchesService} from '../httpClient/services/matches.service';
import {MatchDataResponse} from '../model/MatchDataResponse';
import {JsonConvert} from 'json2typescript';
import {Match} from '../model/match';

@Component({
  selector: 'app-league-bar-chart',
  templateUrl: './league-bar-chart.component.html',
  styleUrls: ['./league-bar-chart.component.css']
})

/**
 *  Problemas:
 *  - Muchos juegos durante el mismo dia.
 *  - Campeones deberian ser tipo String no tipo numero.
 *
 *
 *
 * Ideas:
 * - Agrupar todos los matches de cada dia.
 * - Linkear el numero del champion con su nombre.
 * - Series deberian ser los champion names.
 * - barChartLabels deberian ser Dates.
 */

export class LeagueBarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = []; // should be dates.
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];


  // variables.
  isChartReady: boolean;


  /*
  A Map? Map<String[], String>
      -----> [12, 3, 4, 5], Teemo
 */

//   data: [4, 7, 0, 2], label: 'Teemo'
// },
//
// {
//   data: [2, 1, 8, 4], label: 'Janna'
// }

  public barChartData: ChartDataSets[] = [];

  public dataSets: ChartDataSets;


  constructor (private service: MatchesService) {
  }

  ngOnInit () {

  }


  setData() {
    this.service.getRecentDates().subscribe((stringArray: [string]) => {
      this.barChartLabels = stringArray;
    });

    /*This works */

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



    // this.service.getSummonerData().subscribe((matchDataResponse: MatchDataResponse) => {
    //   /*
    //   {
    //     response: [ {data:[], label: ''} ]
    //   }
    //   */
    //
    //   this.barChartData = matchDataResponse.matches;   // does not work.
    //   if (this.barChartData != null) {
    //     this.isChartReady = true;
    //   }
    // });




    // this.service.getSummonerData().subscribe((arrayData: Match[]) => {
    //   for (let key of Object.keys(arrayData)) {
    //     let timesPlayed = arrayData[key];
    //     this.barChartData.push({
    //       label: key,
    //       data: timesPlayed
    //     });
    //     console.log(key, timesPlayed);
    //   }
    //   this.isChartReady = true;
    // });
  }
}
