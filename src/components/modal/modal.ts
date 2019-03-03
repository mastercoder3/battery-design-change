import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the ModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalComponent {

  text: string;
  second=false;

  constructor() {
    console.log('Hello ModalComponent Component');
    this.text = 'Hello World';
  }

  close(){
    
  }

  openNext(){
    this.second = true;
  }

}
