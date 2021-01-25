import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {MatchDataResponse} from '../../model/MatchDataResponse';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MatchesService {


  constructor (private httpClient: HttpClient) {
  }


  getSummonerData (): Observable<MatchDataResponse> {
    return this.httpClient.get<MatchDataResponse>('http://localhost:9090/summonerLeagueWebV2/pteemo', httpOptions);
  }

  getRecentDates (): Observable<[string]> {
    return this.httpClient.get<[string]>('http://localhost:9090/recentDates/pteemo', httpOptions);
  }
}
