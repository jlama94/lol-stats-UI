import {Component, OnInit} from '@angular/core';
import {MatchesService} from '../httpClient/services/matches.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


// https://stackoverflow.com/questions/46909164/data-or-datasets-field-are-required-to-render-char-bar-in-angular-4
export class HomeComponent implements OnInit {

  // variables

  userName: string;

  isChartReady = false;





  constructor (private matchService: MatchesService) {}


  ngOnInit () {
    // this.setData('bar');
  }
}
