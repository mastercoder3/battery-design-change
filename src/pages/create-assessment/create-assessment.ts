import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalComponent } from '../../components/modal/modal';

/**
 * Generated class for the CreateAssessmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-assessment',
  templateUrl: 'create-assessment.html',
})
export class CreateAssessmentPage {

  selected="battery";
  profileModal;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAssessmentPage');
  }

  setTab(val){
    this.selected = val;
  }

  presentModal(){
    this.profileModal = this.modalCtrl.create(ModalComponent, { image: ''});
    this.profileModal.present();
  }

}
