import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SimulatorResultPage } from '../pages/simulator-result/simulator-result';
import { AccountPage } from '../pages/account/account';
import { FaqPage } from '../pages/faq/faq';
import { ContactPage } from '../pages/contact/contact';

import { ApiServiceProvider } from '../providers/api-service/api-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private api:ApiServiceProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Account', component: AccountPage },
      { title: 'FAQ', component: FaqPage },
      { title: 'Contact', component: ContactPage },
      { title: 'Logout' }
      // { title: 'List', component: ListPage }
    ];

    if(localStorage.getItem('uid')){
      this.rootPage = HomePage;
    }

  }

  ngOnInit(){
    
    
  }

  logout(){
    localStorage.removeItem('uid');
   this.nav.setRoot(LoginPage);
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title !== 'Logout')
      this.nav.setRoot(page.component);
    else  
      this.logout();
  }
}
