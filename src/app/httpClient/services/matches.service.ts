import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {SummonerData} from '../../model/summoner-data';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MatchesService {


  constructor(private httpClient: HttpClient) {}

  getSummonerMatchData(): Observable <SummonerData> {
    return this.httpClient.get<SummonerData>('http://localhost:9090/summonerData/pTeemo', httpOptions);
  }
}