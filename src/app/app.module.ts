import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { GrowthCalculatorPage } from '../pages/growth-calculator/growth-calculator';
import { GrowthCalculatorResultPage } from '../pages/growth-calculator-result/growth-calculator-result';
import { SimulatorPage } from '../pages/simulator/simulator';
import { SimulatorResultPage } from '../pages/simulator-result/simulator-result';
import { CoinComparisonPage } from '../pages/coin-comparison/coin-comparison';
import { MarketPricesPage } from '../pages/market-prices/market-prices';
import { AccountPage } from '../pages/account/account';
import { FaqPage } from '../pages/faq/faq';
import { ContactPage } from '../pages/contact/contact';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { DecimalPipe } from '@angular/common';
import {MillionPipe} from './../million';
import { HelperProvider } from '../providers/helper/helper';

@NgModule({
  declarations: [
    MyApp,
    MillionPipe,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    ForgotPasswordPage,
    GrowthCalculatorPage,
    GrowthCalculatorResultPage,
    SimulatorPage,
    SimulatorResultPage,
    CoinComparisonPage,
    MarketPricesPage,
    AccountPage,
    FaqPage,
    ContactPage,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    ForgotPasswordPage,
    GrowthCalculatorPage,
    GrowthCalculatorResultPage,
    SimulatorPage,
    SimulatorResultPage,
    CoinComparisonPage,
    MarketPricesPage,
    AccountPage,
    FaqPage,
    ContactPage,
  
  ],
  providers: [
    StatusBar,
    DecimalPipe,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider,
    HelperProvider
  ]
})
export class AppModule {}
