import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GrowthCalculatorPage } from '../growth-calculator/growth-calculator';
import { SimulatorPage } from '../simulator/simulator';
import { CoinComparisonPage } from '../coin-comparison/coin-comparison';
import { MarketPricesPage } from '../market-prices/market-prices';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ClickToGrowth(){
    this.navCtrl.setRoot(GrowthCalculatorPage);
  }
  ClickToSimulator(){
    this.navCtrl.setRoot(SimulatorPage);
  }
  ClickToCoinComparson(){
    this.navCtrl.setRoot(CoinComparisonPage);
  }
  ClickToMarketPrices(){
    this.navCtrl.push(MarketPricesPage);
  }

}
