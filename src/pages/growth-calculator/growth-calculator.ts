import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GrowthCalculatorResultPage } from '../growth-calculator-result/growth-calculator-result';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { HelperProvider } from '../../providers/helper/helper';
import { AnimationBuilder, AnimationService } from 'css-animator';

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
   

 
  @ViewChild('myelement',{ read: ElementRef }) myElem: ElementRef;
  @ViewChild('myelement1',{ read: ElementRef }) myElem1: ElementRef;
  
  private animator: AnimationBuilder;
  private animator1: AnimationBuilder;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private api:ApiServiceProvider, private helper: HelperProvider,animationService: AnimationService) {
    this.isShown = true;
    this.isShownLogo = false;
    this.animator = animationService.builder();
    this.animator1 = animationService.builder();
 
    
  }

  animateElem(){

    console.log(this.myElem.nativeElement);

   
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.animator.duration = 2900;
    this.animator.type = 'flash';
    this.animator.addAnimationClass('infinite');
    this.animator.iterationCount=100
    // this.animator.applyIterationCount(this.myElem.nativeElement,500);
    this.animator.show(this.myElem.nativeElement);
  
 
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
  clickToStop(){
    this.animator.stop(this.myElem.nativeElement);
    
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
    this.animator1.duration = 800;
    this.animator1.type = 'pulse';
    this.animator1.addAnimationClass('infinite');
    this.animator1.iterationCount=200
       this.growthCalculator = false;
       this.isShown = false;
       this.isShownLogo = true;
       try{
        setTimeout(() => {
            // this.animator.applyIterationCount(this.myElem.nativeElement,500);
              this.animator1.show(this.myElem1.nativeElement);
              }, 100);
       }
       catch(eeee){

       }
       
     }
      
   })

  }

  inputClick(){
    //this.animator1.show(this.myElem1.nativeElement);
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
    try{
          this.animator.stop(this.myElem1.nativeElement);
    }catch(ee){

    }

  }

  inputBlur(){
    if(this.factor !== ''){
    this.showButton = true;
    try{
      this.animator.stop(this.myElem1.nativeElement);
    }catch(eee){

    }
    
    }
    else
    this.showButton = false ;
  }

}
