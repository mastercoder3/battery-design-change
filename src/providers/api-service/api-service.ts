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
  GrowthCalculator:string = "https://demo.cryptowizzy.com/api/growthCalculatorCard.php?symbol=";
  GrowthCalculatorResult:string = "https://demo.cryptowizzy.com/api/growthCalculatorResult.php?symbol=";

  constructor(public http: HttpClient) {
    console.log('Hello ApiServiceProvider Provider');
  }
 
 
  signup(email,password,ref){
    return this.http.get(`${this.RegisterURL}?email=${email}&pw=${password}&pw2=${password}&ref=${ref}`);
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

}
