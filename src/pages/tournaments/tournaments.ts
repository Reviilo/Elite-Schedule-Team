import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  itemTapped() {
    this.navCtrl.push(TeamsPage);
  }

}
