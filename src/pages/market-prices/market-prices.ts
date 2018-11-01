import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
import { ApiServiceProvider } from '../../providers/api-service/api-service';


/**
 * Generated class for the MarketPricesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-market-prices',
  templateUrl: 'market-prices.html',
})
export class MarketPricesPage implements OnInit {


  marketPrices;
  marketPricesHead;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api:ApiServiceProvider) {
  }

  ionViewDidEnter(){
    this.getMarketPrices();
    this.getMarketPricesHead();
  }

  ngOnInit(){
    
  }

  getMarketPrices(){
    this.api.getMarketPrices().subscribe( (data) => {
     this.marketPrices = data
     console.log("marketPrices",  this.marketPrices);
   })
 }

 getMarketPricesHead(){
  this.api.getMarketPricesHead().subscribe( res => {
    console.log(res)
    this.marketPricesHead = [];
   this.marketPricesHead.push(res);
   console.log("marketPricesHead",  this.marketPricesHead);
 })
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketPricesPage');
  }
  ClickToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  clickToAccountPage(){
    this.navCtrl.setRoot(AccountPage);
  }

}
