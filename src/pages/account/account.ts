import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  buttonclass1 = "custombutton1"
  buttonclass2 = "custombutton2"
  buttonclass3 = "custombutton3"
  buttonclass4 = "custombutton4"

  show=true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  ClickToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

}
