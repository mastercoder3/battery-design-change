import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email;
  password;
  id;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiServiceProvider) {
  }

  login(){
    if(this.email !== '' && this.password !== '')
    this.api.login(this.email,this.password)
      .subscribe(res => {
        console.log(res);
        this.id = res;
        console.log(this.id);
        this.navCtrl.setRoot(HomePage);
        
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ClickToRegister(){
    this.navCtrl.push(RegisterPage);
  }
  ClickToReset(){
    this.navCtrl.push(ForgotPasswordPage);
  }
  ClickToLogin(){
    this.navCtrl.setRoot(HomePage);
  }

}
