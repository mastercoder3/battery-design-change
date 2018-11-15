import { Component, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SimulatorResultPage } from '../simulator-result/simulator-result';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { getLocaleWeekEndRange } from '@angular/common';
import { HelperProvider } from '../../providers/helper/helper';

/**
 * Generated class for the SimulatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-simulator',
  templateUrl: 'simulator.html',
})
export class SimulatorPage {

  @ViewChild('slides') slides: Slides;

  isShown: boolean;
  isShownLogo: boolean;
  simulator;
  name;
  Fullname;
  logo;
  search = {
    image: '',
    name: '',
    symbol:''
  }
  simulator1;
  simulator2;
  simulator3;
  simulator4;
  showSlider: boolean = false;
  showbutton: boolean =false;
  input: Array<any> = [];
  factor;
  showButton: boolean = false;
  end: boolean =false;
  lock:any;

  

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiServiceProvider, private helper: HelperProvider) {
    this.isShown = true;
    this.isShownLogo = false;
  }

  getCoinComparisonName(name){
    this.api.getCoinComparisonName(name).subscribe( (data) => {
      this.simulator = data
      console.log("CoinComparisonName",  this.simulator);
    })
   }

   onSearch(event){
   
    if(event==""){
      this.simulator='';  
    }
    else{
     this.getCoinComparisonName(event);
    }
 //  this.name+=event.target.value;

 
  }

  getSimulator(name){
    if(name == ""){
      this.name = "";
    }else{
    this.name = name;
    let x = this.simulator.filter(data => data.symbol === name);
    this.search.name = x[0].name;
    this.search.image = x[0].logoid;
    this.search.symbol = x[0].symbol;
   this.api.getSimulatorSlider1(this.name).subscribe((data) =>{
     this.simulator1 = data
     if(this.simulator1){
       this.showSlider = true;
       this.showbutton = true;
       this.simulator = false;
       this.isShown = false;
       this.isShownLogo = true;

      setTimeout( () => {
        this.slides.lockSwipes(true);
      }, 1000);
    this.getdata();
     }
   })

  }}

  getdata(){
    this.api.getSimulatorSlider2(this.name).subscribe((data) =>{
      this.simulator2 = data 
      console.log(this.simulator2);
       })
       this.api.getSimulatorSlider3(this.name).subscribe((data) =>{
        this.simulator3 = data 
         })
         this.api.getSimulatorSlider4(this.name).subscribe((data) =>{
          this.simulator4 = data ;
          
           })
      }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SimulatorPage');

  }
  ClcikToSimulatorResult(){
    if(this.factor !== '' && this.factor !== undefined ){
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.input.push(this.factor);
        console.log(this.input);
        this.slides.lockSwipes(true);
        this.factor='';
       } 
       else 
        this.helper.presentToast('Please enter a number larger than zero before clicking the arrow.')
       
        if(this.end){
        this.navCtrl.push(SimulatorResultPage,{
        multi1: this.input[0],
        multi2:this.input[1],
        multi3:this.input[2],
        multi4:this.input[3],
        name: this.search.symbol,
        Fullname: this.search.name,
        logo: this.search.image
      });  
    }
    
    if(this.slides.isEnd()){
      this.end = true;
    }
      
  }
  
  
  ClickToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  clickToAccountPage(){
    this.navCtrl.setRoot(AccountPage);
  }
  clickBackToSimulator(){
    this.navCtrl.setRoot(SimulatorPage);
  }

  backButton(){
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
    this.factor = this.input.pop();
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
