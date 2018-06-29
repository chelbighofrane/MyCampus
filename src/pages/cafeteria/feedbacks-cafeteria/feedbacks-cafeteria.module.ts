import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbacksCafeteriaPage } from './feedbacks-cafeteria';

@NgModule({
  declarations: [
    FeedbacksCafeteriaPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedbacksCafeteriaPage),
  ],
})
export class FeedbacksCafeteriaPageModule {}
