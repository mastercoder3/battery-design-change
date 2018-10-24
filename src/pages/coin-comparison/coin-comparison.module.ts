import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoinComparisonPage } from './coin-comparison';

@NgModule({
  declarations: [
    CoinComparisonPage,
  ],
  imports: [
    IonicPageModule.forChild(CoinComparisonPage),
  ],
})
export class CoinComparisonPageModule {}
