import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EliteApi {

  private baseUrl = "https://elite-schedule-app-i3-00.firebaseio.com/";
  private currentTourney: any = {};

  constructor(public http: HttpClient) {
  }
  
  getTournements() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`).subscribe(res => resolve(res));
    });
    
  }

  getTournamentData(tournayId): Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments-data/${tournayId}.json`)
      .map(response => {
        this.currentTourney = response;
        return this.currentTourney;
      });
  }

}
