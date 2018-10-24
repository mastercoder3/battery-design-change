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
    this.navCtrl.push(GrowthCalculatorPage);
  }
  ClickToSimulator(){
    this.navCtrl.push(SimulatorPage);
  }
  ClickToCoinComparson(){
    this.navCtrl.push(CoinComparisonPage);
  }
  ClickToMarketPrices(){
    this.navCtrl.push(MarketPricesPage);
  }

}
