import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { ToastController } from 'ionic-angular';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { HelperProvider } from '../../providers/helper/helper';

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
  form: FormGroup;

  constructor(public navCtrl: NavController,private fb: FormBuilder , private helper: HelperProvider,
     public navParams: NavParams, private api: ApiServiceProvider,private toastCtrl: ToastController) {
      this.form = this.fb.group({
        email: ['',Validators.compose([Validators.required, Validators.email])],
        password: ['',Validators.required]
      });
  }

  login(form){
    this.api.login(form.value.email,form.value.password)
      .subscribe(res => {
        if(res){
          this.id = res;
          if(this.id.iduser)
            localStorage.setItem('uid',this.id.iduser);
          this.navCtrl.setRoot(HomePage);
        }
        else{
            this.helper.presentToast('Invalid Email or Password.');
        }

        
      });
  }

  get f(){return this.form.controls;}

  ionViewDidLoad() {

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
