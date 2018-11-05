import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

/**
 * Generated class for the CoinComparisonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coin-comparison',
  templateUrl: 'coin-comparison.html',
})
export class CoinComparisonPage {

  coinComparison;
  coinComparsionName;
  input;
  coinComparisonAddCoin;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api:ApiServiceProvider) {
  }

  ionViewDidEnter(){
    this.getCoinComparison();
    this.getCoinComparisonName('eth');
  }

  ngOnInit(){
this.getCoinComparisonAddCoin();
  }
  getCoinComparison(){
    this.api.getCoinComparison().subscribe( (data) => {
     this.coinComparison = data
     console.log("CoinComparison",  this.coinComparison);
   })
 }
 getCoinComparisonName(name){
  this.api.getCoinComparisonName(name).subscribe( (data) => {
    this.coinComparsionName = data
    console.log("CoinComparisonName",  this.coinComparsionName);
  })
 }
 onSearch(event){
   
   if(event==""){
     this.coinComparsionName=null;  
   }
   else{
    this.getCoinComparisonName(event);
   }
//  this.name+=event.target.value;
 console.log(event);

 }

 getCoinComparisonAddCoin(){
   this.api.getCoinComparisonAddCoin(this.coinComparsionName, this.input).subscribe( (data) => {
    this.coinComparisonAddCoin = data
    console.log("coinComparisonAddCoins",  this.coinComparisonAddCoin);
  })
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoinComparisonPage');
  }
  ClickToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  clickToAccountPage(){
    this.navCtrl.setRoot(AccountPage);
  }

}
