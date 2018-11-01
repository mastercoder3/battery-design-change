import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiServiceProvider, private toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(){
    if(this.email !== '' && this.password !== '' && this.password2 !== '' && this.ref !== '')
    this.api.signup(this.email,this.password,this.ref)
      .subscribe(res => {
        this.id = res;
        console.log(this.id);
        if(this.id.res){
          let toaster = this.toast.create({
            message: "Registered successfully",
            duration: 3000
          });
          toaster.present();
          // localStorage.setItem('uid',this.id.iduser);
        }

      });
  }

}
