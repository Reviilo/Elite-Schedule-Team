import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';

@Component({
    selector: 'page-my-teams',
    templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    goToTournaments() {
        this.navCtrl.push(TournamentsPage);
    }

}
