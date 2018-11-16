import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
   
   events: any;
   data = {
    "header": "Popular Car",
    "button": "CHOOSE",
    "items": [
        {
            "id": 1,
            "title": "What is the source of our data?" ,
            "icon": "icon-chevron-right",
            "expandItems": [
              {
                  "title": "We get our data from coinmarketcap.com. Our servers are updated every 5 minutes."
              },
              
            ]
        },
        {
            "id": 2,
            "title": "Is CryptoWiz free?",
            "icon": "icon-chevron-right",
            "expandItems": [
              {
                  "title": "Yes, the current test version is free. In the fall of 2018 we will offer a paid version for premium users."
              },
            ]
        },
        {
            "id": 3,
            "title": "How can you send us feedback?",
            "icon": "icon-chevron-right",
            "expandItems": [
              {
                  "title": "Drop us a line at info@cryptowizzy.com."
              },
              
            ]
        },
        {
            "id": 4,
            "title": "How does an invitation code works?",
            "icon": "icon-chevron-right",
            "expandItems": [
              {
                  "title": "To create a new account you must have an invitation code. Once your account has been created you will receive your own invitation code which you can share with friends."
              },
              
            ]
        },
        {
            "id": 5,
            "title": "How will the voting system work?",
            "icon": "icon-chevron-right",
            "expandItems": [
              {
                  "title": "Users will be able to vote for new features. The more users share and use the app, the more their vote will count!"
              },
              
            ]
        },
        {
            "id": 6,
            "title": "How many tools will be added?",
            "icon": "icon-chevron-right",
            "expandItems": [
              {
                  "title": "We will launch with 5 tools. We will grow this amount to 20 in our first year with the help of user feedback."
              },
              
            ]
        },
        {
            "id": 7,
            "title": "when is pre-sale launch?",
            "icon": "icon-chevron-right",
            "expandItems": [
              {
                  "title": "When we launch in the fall of 2018 we will offer the paid version of the app at a huge discount. This Pre-Sale will be for a limited number of accounts. Once the Pre-Sale date has been determined it we will place this on our site."
              },
              
            ]
        },
       
    ]
};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
  }
  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }
  ClickToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }
  clickToAccountPage(){
    this.navCtrl.setRoot(AccountPage);
  }

}
