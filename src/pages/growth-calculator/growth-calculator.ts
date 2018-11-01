import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GrowthCalculatorResultPage } from '../growth-calculator-result/growth-calculator-result';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

/**
 * Generated class for the GrowthCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-growth-calculator',
  templateUrl: 'growth-calculator.html',
})
export class GrowthCalculatorPage {

  growthCalculator;
  growthCalculator1;
  showCard: boolean = false;
  showbutton: boolean = false;
  input;
  name;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api:ApiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrowthCalculatorPage');
  }
  getCoinComparisonName(name){
    this.api.getCoinComparisonName(name).subscribe( (data) => {
      this.growthCalculator = data
      console.log("CoinComparisonName",  this.growthCalculator);
    })
   }

   onSearch(event){
   
    if(event==""){
      this.growthCalculator='';  
    }
    else{
     this.getCoinComparisonName(event);
    }
 //  this.name+=event.target.value;

 
  }

  getGrowthCalculator(name){
    this.name = name;
   this.api.getGrowthCalculator(name).subscribe((data) =>{
     this.growthCalculator1 = data
     if(this.growthCalculator1){
       this.showCard = true;
       this.showbutton = true;
       this.growthCalculator = false;
     }
      
   })

  }

  ClickToResultPage(){
    this.navCtrl.push(GrowthCalculatorResultPage,{
      multi: this.input,
      name: this.name
    });
  }
  ClickToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  clickToAccountPage(){
    this.navCtrl.setRoot(AccountPage);
  }

}
