import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarketPricesPage } from './market-prices';

@NgModule({
  declarations: [
    MarketPricesPage,
  ],
  imports: [
    IonicPageModule.forChild(MarketPricesPage),
  ],
})
export class MarketPricesPageModule {}
