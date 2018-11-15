import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GrowthCalculatorResultPage } from '../growth-calculator-result/growth-calculator-result';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { HelperProvider } from '../../providers/helper/helper';

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

  isShown: boolean;
  isShownLogo: boolean;
  growthCalculator;
  growthCalculator1;
  showCard: boolean = false;
  showbutton: boolean = false;
  showButton: boolean =false;
  factor;
  input:string='';
  name;
  Fullname;
  logo;
  search = {
    image: '',
    name: '',
    symbol:''
  }
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private api:ApiServiceProvider, private helper: HelperProvider) {
    this.isShown = true;
    this.isShownLogo = false;
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
    let x = this.growthCalculator.filter(data => data.symbol === name);
    this.search.name = x[0].name;
    this.search.image = x[0].logoid;
    this.search.symbol = x[0].symbol;
    console.log(this.search)
   this.api.getGrowthCalculator(name).subscribe((data) =>{
     this.growthCalculator1 = data
     if(this.growthCalculator1){
       this.showCard = true;
       this.showbutton = true;
       this.growthCalculator = false;
       this.isShown = false;
       this.isShownLogo = true;
     }
      
   })

  }

  ClickToResultPage(){
    if(this.input===""){
      this.helper.presentToast('Please enter a number larger than zero before clicking the arrow.');
    }else{
    this.navCtrl.push(GrowthCalculatorResultPage,{
      multi: this.input,
      name: this.search.symbol,
      Fullname: this.search.name,
      logo: this.search.image
    });
  }}
  ClickToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  clickToAccountPage(){
    this.navCtrl.setRoot(AccountPage);
  }
  clickBackToGrowth(){
    this.navCtrl.setRoot(GrowthCalculatorPage);
  }
  inputFocus(){
    this.showButton = true;
  }

  inputBlur(){
    if(this.factor !== '')
    this.showButton = true;
    else
    this.showButton = false
  }

}
