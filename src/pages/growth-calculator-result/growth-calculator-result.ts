import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';

/**
 * Generated class for the GrowthCalculatorResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-growth-calculator-result',
  templateUrl: 'growth-calculator-result.html',
})
export class GrowthCalculatorResultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrowthCalculatorResultPage');
  }
  ClickToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  clickToAccountPage(){
    this.navCtrl.setRoot(AccountPage);
  }

}
