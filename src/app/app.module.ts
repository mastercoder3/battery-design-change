import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http'

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DecimalPipe } from '@angular/common';
import {MillionPipe} from './../million';
import { AssessmentPage } from '../pages/assessment/assessment';
import { CreateAssessmentPage } from '../pages/create-assessment/create-assessment';
import { ModalComponent } from '../components/modal/modal';
import { HelperProvider } from '../providers/helper/helper';

@NgModule({
  declarations: [
    MyApp,
    MillionPipe,
    AssessmentPage,
    CreateAssessmentPage,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AssessmentPage,
    CreateAssessmentPage,
    ModalComponent
  ],
  providers: [
    StatusBar,
    DecimalPipe,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HelperProvider,
  ]
})
export class AppModule {}
