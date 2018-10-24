import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrowthCalculatorPage } from './growth-calculator';

@NgModule({
  declarations: [
    GrowthCalculatorPage,
  ],
  imports: [
    IonicPageModule.forChild(GrowthCalculatorPage),
  ],
})
export class GrowthCalculatorPageModule {}
