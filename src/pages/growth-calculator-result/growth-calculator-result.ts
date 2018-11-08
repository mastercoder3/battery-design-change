import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { GrowthCalculatorPage } from '../growth-calculator/growth-calculator';

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

  multi;
  growthCalculatorResult;
  searchCode;
  usd;
  btc;
  cap;
  share;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiServiceProvider) {
    this.multi = this.navParams.get('multi');
    console.log(this.multi);
    this.searchCode = this.navParams.get('name');
    
    
  }

  ngOnInit(){
    this.getGrowthCalculatorResult(this.searchCode);
  }

  getGrowthCalculatorResult(name){
   this.api.getGrowthCalculatorResult(name).subscribe((data) =>{
     this.growthCalculatorResult = data
     //usd
     this.usd = parseFloat( this.growthCalculatorResult.priceInUSD)
     this.btc = parseFloat(this.growthCalculatorResult.priceInBTC)
     this.cap = this.growthCalculatorResult.marketCap.substring(1);
     this.cap = parseFloat(this.cap.replace(/,/g, ''));
     let length = this.growthCalculatorResult.marketShare.length;
     this.share = this.growthCalculatorResult.marketShare.substring(0,length-1);
     console.log(this.cap)
   })

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
  clickBackToGrowth(){
    this.navCtrl.setRoot(GrowthCalculatorPage);
  }

}
