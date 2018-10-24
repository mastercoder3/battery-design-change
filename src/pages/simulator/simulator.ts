import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SimulatorResultPage } from '../simulator-result/simulator-result';

/**
 * Generated class for the SimulatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-simulator',
  templateUrl: 'simulator.html',
})
export class SimulatorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimulatorPage');
  }
  ClcikToSimulatorResult(){
    this.navCtrl.push(SimulatorResultPage);
  }

}
