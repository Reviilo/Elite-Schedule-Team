import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';
import { EliteApi } from '../../providers/elite-api/elite-api';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  public teams = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public eliteApi: EliteApi) {
  }

  ionViewDidLoad () {
    let selectedTourney = this.navParams.data;
    this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
      this.teams = data.teams;
      console.log('** data **', data);
    })
  }
  
  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

}
