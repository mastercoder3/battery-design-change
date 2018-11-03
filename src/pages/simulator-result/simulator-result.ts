import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
import { SimulatorPage } from '../simulator/simulator';

/**
 * Generated class for the SimulatorResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-simulator-result',
  templateUrl: 'simulator-result.html',
})
export class SimulatorResultPage {

  multi1;
  multi2;
  multi3;
  multi4;
  searchCode;
  buttonclass1 = "custombutton1"
  buttonclass2 = "custombutton2"
  show=true;
  // show1=true;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.multi1 = this.navParams.get('multi1');
    this.multi2 = this.navParams.get('multi2');
    this.multi3 = this.navParams.get('multi3');
    this.multi4 = this.navParams.get('multi4');
    this.searchCode = this.navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimulatorResultPage');
  }
  ClickToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  clickToAccountPage(){
    this.navCtrl.setRoot(AccountPage);
  }

toggle_click(){

   if(this.buttonclass1 == "custombutton1"){
     this.show = false
    //  this.show1= true
     this.buttonclass1 = "custombutton2"
     this.buttonclass2 = "custombutton1"
  
   }else{
     this.show = true
    //  this.show1 = false
    this.buttonclass1 = "custombutton1"
    this.buttonclass2 = "custombutton2"
   }
}
clickBackToSimulator(){
  this.navCtrl.setRoot(SimulatorPage);
}


}
