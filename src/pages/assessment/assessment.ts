import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateAssessmentPage } from '../create-assessment/create-assessment';

/**
 * Generated class for the AssessmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assessment',
  templateUrl: 'assessment.html'
})
export class AssessmentPage {

  selected="battery"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssessmentPage');
  }

  setTab(val){
    this.selected = val;
  }

  assessment(){
    console.log('coming')
    this.navCtrl.push(CreateAssessmentPage)
  }

}
