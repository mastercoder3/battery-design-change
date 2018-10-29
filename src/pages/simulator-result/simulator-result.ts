import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';

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

  buttonclass1 = "custombutton1"
  buttonclass2 = "custombutton2"
  show=true;
  // show1=true;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
