import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { HelperProvider } from '../../providers/helper/helper';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email;
  password;
  password2;
  ref;
  id;
  form: FormGroup;

  constructor(public navCtrl: NavController,private fb: FormBuilder , private helper: HelperProvider,
    public navParams: NavParams, private api: ApiServiceProvider,private toastCtrl: ToastController) {
     this.form = this.fb.group({
       email: ['',Validators.compose([Validators.required, Validators.email])],
       password: ['',Validators.compose([Validators.required, Validators.minLength(6)])],
       password2: ['',Validators.compose([Validators.required, Validators.minLength(6)])],
       ref: ['',Validators.required]
     });
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(form){
    
    this.api.signup(form.value.email,form.value.password,form.value.password2,form.value.ref)
      .subscribe(res => {
        if(res){
          this.id = res;
          this.navCtrl.push(LoginPage);
        }else{
          this.helper.presentToast('Invalid Email or Password.');
      }
       

      });
  }

}
