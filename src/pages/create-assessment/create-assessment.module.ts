import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAssessmentPage } from './create-assessment';

@NgModule({
  declarations: [
    CreateAssessmentPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAssessmentPage),
  ],
})
export class CreateAssessmentPageModule {}
