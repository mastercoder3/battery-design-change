import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {MarketPrices, MarketPricesHead} from "./../../app/models/MarketPrices";
import {CoinComparison} from "./../../app/models/CoinComparison";
import {GrowthCalculator} from "./../../app/models/GrowthCalculator";


@Injectable()
export class ApiServiceProvider {

  RegisterURL:string = "https://demo.cryptowizzy.com/api/validateRegister.php";
  LoginUser:string = "https://demo.cryptowizzy.com/api/getUserLogin.php";

  MarketPricesHead:string = "https://demo.cryptowizzy.com/api/marketPricesFrame.php";
  MarketPrices:string = "https://demo.cryptowizzy.com/api/marketPricesData.php?email=beekvang@gmail.com";
  CoinComparison:string = "https://demo.cryptowizzy.com/api/coinComparisonFrame.php?email=beekvang@gmail.com";
  CoinComparisonName:string = "https://demo.cryptowizzy.com/api/selectCoin.php?text=";
  CoinComparisonAddCoin:string = "https://demo.cryptowizzy.com/api/coinComparisonAdd.php?symbol=";
  GrowthCalculator:string = "https://demo.cryptowizzy.com/api/growthCalculatorCard.php?symbol=";
  GrowthCalculatorResult:string = "https://demo.cryptowizzy.com/api/growthCalculatorResult.php?symbol=";
  SimulatorSlider1:string = "https://demo.cryptowizzy.com/api/simulatorCard1.php?symbol=";
  SimulatorSlider2:string = "https://demo.cryptowizzy.com/api/simulatorCard2.php?symbol=";
  SimulatorSlider3:string = "https://demo.cryptowizzy.com/api/simulatorCard3.php?symbol=";
  SimulatorSlider4:string = "https://demo.cryptowizzy.com/api/simulatorCard4.php?symbol=";
  SimulatorResult:string = "https://demo.cryptowizzy.com/api/simulatorResults.php?symbol=";
  SimulatorSummary:string = "https://demo.cryptowizzy.com/api/simulatorSummary.php?symbol=";

  constructor(public http: HttpClient) {
    console.log('Hello ApiServiceProvider Provider');
  }
 
 
  signup(email,password,password2,ref){
    return this.http.get(`${this.RegisterURL}?email=${email}&pw=${password}&pw2=${password2}&ref=${ref}`);
  }

  login(email,password){
    return this.http.get(`${this.LoginUser}?email=${email}&pw=${password}`);
  }

  getMarketPrices(): Observable<MarketPrices>{
    return this.http.get<MarketPrices>(this.MarketPrices);
    
  }

  getMarketPricesHead(){
    return this.http.get(this.MarketPricesHead);
  }
  getCoinComparison(): Observable<CoinComparison>{
    return this.http.get<CoinComparison>(this.CoinComparison);
  }
  getCoinComparisonName(name){
    return this.http.get(this.CoinComparisonName+name);
  }
  getGrowthCalculator(name){
    return this.http.get(this.GrowthCalculator+name);
  }
  getGrowthCalculatorResult(name){
    return this.http.get(this.GrowthCalculatorResult+name+"&growth=2");
  }
  getSimulatorSlider1(name){
    return this.http.get(this.SimulatorSlider1+name);
  }
  getSimulatorSlider2(name){
    return this.http.get(this.SimulatorSlider2+name+"&growth=2");
  }
  getSimulatorSlider3(name){
    return this.http.get(this.SimulatorSlider3+name);
  }
  getSimulatorSlider4(name){
    return this.http.get(this.SimulatorSlider4+name+"&growth=2");
  }
  getSimulatorResult(name,price,month,gmc,btcShare){
    return this.http.get(this.SimulatorResult+name+"&price="+price+"&months="+month+"&gmc="+gmc+"&btcShare="+btcShare);
  }
  getSimulatorSummary(name,price,month,gmc,btcShare){
    return this.http.get(this.SimulatorSummary+name+"&price="+price+"&months="+month+"&gmc="+gmc+"&btcShare="+btcShare);
  }
  getCoinComparisonAddCoin(name,days){
    return this.http.get(this.CoinComparisonAddCoin+name+"&days="+days)
  }
}
