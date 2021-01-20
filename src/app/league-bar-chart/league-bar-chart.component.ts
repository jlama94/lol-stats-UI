import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {MatchesService} from '../httpClient/services/matches.service';
import {MatchDataResponse} from '../model/MatchDataResponse';
import {JsonConvert} from 'json2typescript';

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

  public jsonConverter: JsonConvert = new JsonConvert();

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = []; // should be dates.
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];


  // variables.
  championNames: Array<any> = [];
  isChartReady: boolean;
  dates: Array<any> = [];
  userName: string;


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


  setDates() {
    if (this.barChartLabels === null) {
      this.isChartReady = false;
    }
    this.service.getRecentDates().subscribe(sevenDatesArray =>  {
      this.barChartLabels = sevenDatesArray;
    });
  }


  setData() {
    this.setDates();


    this.service.getSummonerData().subscribe((value) => {
      const response: MatchDataResponse = this.jsonConverter.deserializeObject(value, MatchDataResponse);
      console.log(response);
    });


    // this.barChartData.push({
    //   data: [1, 2, 3, 4,],
    //   label: "okay"
    // });
    // if (this.barChartData !== null) {
    //   this.isChartReady = true;
    // }
  }
}
