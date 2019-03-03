import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { AssessmentPage } from '../pages/assessment/assessment';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AssessmentPage;

  pages;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();



  }

  ngOnInit(){
    
    
  }




  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
