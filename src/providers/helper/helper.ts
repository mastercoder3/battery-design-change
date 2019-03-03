import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal';
import { ModalController } from 'ionic-angular';

/*
  Generated class for the HelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelperProvider {

  profileModal;

  constructor(public http: HttpClient, private modalCtrl: ModalController) {
    console.log('Hello HelperProvider Provider');
  }

  openModel(){
    this.profileModal = this.modalCtrl.create(ModalComponent, { image: ''});
    this.profileModal.present();
  }

  close(){
    this.profileModal.dismiss();
  }

}
