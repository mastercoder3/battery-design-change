import { Component, OnInit } from '@angular/core';
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
export class CoinComparisonPage implements OnInit {

  coinComparison;
  coinComparsionName;
  input="90";
  coinComparisonAddCoin: Array<any> = [];
  name;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api:ApiServiceProvider) {
  }

  ionViewDidEnter(){
   
   
  }

  ngOnInit(){
    this.getCoinComparison(); 
  }
  getCoinComparison(){
    this.api.getCoinComparisonAddCoin('BTC', this.input).subscribe( (data) => {
      this.coinComparisonAddCoin.push({name: 'BTC', ...data[0]});
      console.log(this.coinComparisonAddCoin)
    })
 }
 getCoinComparisonName(name){
  this.api.getCoinComparisonName(name).subscribe( (data) => {
    this.coinComparsionName = data;

  })
 }

 getCoin(name){
   this.getCoinComparisonAddCoin(name);
 }
 onSearch(event){
   
   if(event==""){
     this.coinComparsionName="";  
   }
   else{
 this.getCoinComparisonName(event);

   }
//  this.name+=event.target.value;

 }

 getCoinComparisonAddCoin(name){
   this.name = name;
   this.api.getCoinComparisonAddCoin(name, this.input).subscribe( (data) => {
    this.coinComparisonAddCoin.push({name: this.name, ...data[0]});
    if(this.coinComparisonAddCoin){
      this.coinComparsionName=false;
    }
  })
 }

  ionViewDidLoad() {
  }
  ClickToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  clickToAccountPage(){
    this.navCtrl.setRoot(AccountPage);
  }

  onChange(event){
    this.input = event;

    for(let i =0; i< this.coinComparisonAddCoin.length; i++){

      this.setCoins(this.coinComparisonAddCoin[i].name,i);
    }


  }

  setCoins(nae,i){
    this.api.getCoinComparisonAddCoin(nae, this.input).subscribe( (data) => {
      this.coinComparisonAddCoin[i] = {name: nae, ...data[0]};
    })
  }

}
