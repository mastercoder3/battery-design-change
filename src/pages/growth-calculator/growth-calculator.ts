import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GrowthCalculatorResultPage } from '../growth-calculator-result/growth-calculator-result';

/**
 * Generated class for the GrowthCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-growth-calculator',
  templateUrl: 'growth-calculator.html',
})
export class GrowthCalculatorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrowthCalculatorPage');
  }

  ClickToResultPage(){
    this.navCtrl.push(GrowthCalculatorResultPage);
  }

}
